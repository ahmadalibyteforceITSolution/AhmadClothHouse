import { defineStore } from 'pinia'
import api from '../api'
import Swal from 'sweetalert2'
import { useAuthStore } from './auth'
import { products as localProducts } from '../constants/products'

export const useProductsStore = defineStore('products', {
  state: () => ({
    dynamicProducts: [], // Pulled from MongoDB
    loading: false,
    error: null
  }),
  getters: {
    products: (state) => {
      // Get base URL dynamically based on current browser window live link
      const isDev = import.meta.env.MODE === 'development';
      const apiURL = isDev ? 'http://localhost:5000' : window.location.origin;

      // ONLY SHOW DYNAMIC PRODUCTS FROM DATABASE
      const items = (state.dynamicProducts && state.dynamicProducts.length > 0) ? state.dynamicProducts : [];
      if (!Array.isArray(items)) return [];

      return items.filter(p => !!p).map(p => {
        let img = p.image || p.imageUrl || ''

        // If image is missing (because we excluded it in getProducts), try to fetch via stream endpoint
        if (!img || img === '') {
          img = `${apiURL}/api/products/${p._id || p.id}/image`;
        }

        // Dynamically Handle browser live link: auto-adapt old hardcoded localhost URLs to ANY domain
        if (img && img.includes('localhost:5000')) {
          if (!isDev) {
            img = img.replace('http://localhost:5000', window.location.origin);
          }
        } else if (img && img.startsWith('/uploads')) {
          // If the old image is a relative path like /uploads/...
          img = `${apiURL}${img}`;
        }

        return {
          ...p,
          id: p._id || p.id,
          name: p.name || p.title,
          image: img
        }
      });
    },
    categories(state) {
      const cats = new Set()
      this.products.forEach(p => {
        if (p.category) cats.add(p.category)
        if (p.parentCategory) cats.add(p.parentCategory)
      })
      return Array.from(cats)
    }
  },
  actions: {
    async fetchProducts(force = false) {
      // CACHE CHECK: If we already have products and aren't forcing a refresh, skip the fetch
      if (this.dynamicProducts.length > 0 && !force) {
        console.log("AHMADCLOTHS: Using cached products.");
        return;
      }

      this.loading = true
      console.log("AHMADCLOTHS: Starting product fetch...");
      try {
        const res = await api.get('/products')
        console.log("AHMADCLOTHS API RESPONSE:", res.status, res.data);
        if (res.data && res.data.success) {
          this.dynamicProducts = res.data.data;
          console.log(`AHMADCLOTHS: Loaded ${this.dynamicProducts.length} dynamic products.`);
        } else {
          console.warn("AHMADCLOTHS API returned success:false or malformed data", res.data);
        }
      } catch (err) {
        console.error("AHMADCLOTHS SYNC ERROR:", err.message, err.response?.data || err);
        this.error = 'Failed to sync with Ahmadcloths database'
      } finally {
        this.loading = false
      }
    },

    async fetchAdminProducts(force = false) {
      if (this.dynamicProducts.length > 0 && !force) {
        return;
      }
      this.loading = true
      try {
        const res = await api.get('/products/admin')
        if (res.data && res.data.success) {
          this.dynamicProducts = res.data.data;
        }
      } catch (err) {
        this.error = 'Failed to fetch admin products data'
      } finally {
        this.loading = false
      }
    },

    async fetchProductById(id) {
      this.loading = true
      try {
        const res = await api.get(`/products/${id}`)
        if (res.data.success) {
          const product = res.data.data;
          // Update the specific product in the list if it exists
          const idx = this.dynamicProducts.findIndex(p => (p._id || p.id) === id)
          if (idx !== -1) {
            this.dynamicProducts[idx] = product
          } else {
            this.dynamicProducts.push(product)
          }
          return product
        }
      } catch (err) {
        console.error("AHMADCLOTHS FETCH BY ID ERROR:", err);
        return null
      } finally {
        this.loading = false
      }
    },

    async uploadImage(file) {
      const auth = useAuthStore()
      this.loading = true
      try {
        const formData = new FormData()
        formData.append('image', file)
        console.log('AHMADCLOTHS: Uploading image...', file.name, file.size, 'bytes')
        const res = await api.post('/products/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          timeout: 60000 // 60s timeout for large images
        })
        console.log('AHMADCLOTHS: Upload response:', res.data)
        if (res.data.success) {
          // Warn admins if Blob failed and fell back to base64
          if (res.data.storage === 'base64-fallback' || res.data.storage === 'base64') {
            console.warn('AHMADCLOTHS: ⚠️ Image stored as Base64 (slow). Fix BLOB_READ_WRITE_TOKEN!')
            Swal.fire({
              toast: true, position: 'top-end', icon: 'warning',
              title: 'Image saved as Base64',
              text: res.data.note || 'Vercel Blob is not configured. Images will load slowly.',
              showConfirmButton: false, timer: 5000,
              background: auth.isDark ? '#000' : '#fff',
              color: auth.isDark ? '#fff' : '#000'
            })
          } else {
            Swal.fire({
              toast: true, position: 'top-end', icon: 'success',
              title: 'Image uploaded to CDN',
              showConfirmButton: false, timer: 2000,
              background: auth.isDark ? '#000' : '#fff',
              color: auth.isDark ? '#fff' : '#000'
            })
          }
          return res.data.url
        } else {
          this.error = 'Image upload returned unsuccessful response.'
          Swal.fire({ icon: 'warning', title: 'Upload Issue', text: 'Server accepted the file but returned an error. Please try again.', confirmButtonColor: '#d4af37' })
          return null
        }
      } catch (err) {
        console.error('AHMADCLOTHS IMAGE UPLOAD ERROR:', err.response?.data || err.message || err)
        const errorMsg = err.response?.data?.error || err.message || 'Network error during upload'
        this.error = `Image upload failed: ${errorMsg}`
        Swal.fire({ icon: 'error', title: 'Image Upload Failed', text: errorMsg, confirmButtonColor: '#d4af37' })
        return null
      } finally {
        this.loading = false
      }
    },

    async addProduct(prodData) {
      const auth = useAuthStore()
      this.loading = true
      try {
        const payload = {
          name: prodData.title,
          separateName: prodData.separateName,
          nature: prodData.nature,
          price: parseFloat(prodData.price),
          originalPrice: parseFloat(prodData.originalPrice || 0),
          discount: parseFloat(prodData.discount || 0),
          category: prodData.category,
          parentCategory: prodData.parentCategory,
          icon: prodData.iconClass,
          image: prodData.imageUrl,
          filterImageUrl: prodData.filterImageUrl,
          variants: prodData.variants || [],
          costPrice: parseFloat(prodData.costPrice || 0),
          description: `Signature ${prodData.nature} Collection by Ahmad Cloths.`,
          details: ["Ahmad Cloths Guaranteed", "Premium Luxury Fabric", "Authentic Design"]
        }


        const res = await api.post('/products', payload)
        if (res.data.success) {

          await this.fetchProducts(true)

          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'AhmadClothes House - Registered',
            text: `${payload.name} added to catalog.`,
            showConfirmButton: false,
            timer: 3000,
            background: auth.isDark ? '#000' : '#fff',
            color: auth.isDark ? '#fff' : '#000'
          })
          return true
        }
      } catch (err) {
        console.error("AHMADCLOTHS UPLOAD ERROR:", err.response || err);
        this.error = 'Upload protocol failed. Ensure your server is active and image size is within limits.'

        Swal.fire({
          icon: 'error',
          title: 'AhmadClothes House - Protocol Error',
          text: this.error,
          background: auth.isDark ? '#000' : '#fff',
          color: auth.isDark ? '#fff' : '#000'
        })
        return false
      } finally {
        this.loading = false
      }
    },

    async updateProduct(id, prodData) {
      const auth = useAuthStore()
      this.loading = true
      try {
        const payload = {
          name: prodData.title,
          separateName: prodData.separateName,
          nature: prodData.nature,
          price: parseFloat(prodData.price),
          originalPrice: parseFloat(prodData.originalPrice || 0),
          discount: parseFloat(prodData.discount || 0),
          category: prodData.category,
          parentCategory: prodData.parentCategory,
          icon: prodData.iconClass,
          variants: prodData.variants || [],
          costPrice: parseFloat(prodData.costPrice || 0)
        }
        if (prodData.imageUrl) {
          payload.image = prodData.imageUrl;
          payload.filterImageUrl = prodData.filterImageUrl;
        }


        const res = await api.put(`/products/${id}`, payload)
        if (res.data.success) {

          await this.fetchProducts(true)

          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'AhmadClothes House - Updated',
            text: `${payload.name} modified in catalog.`,
            showConfirmButton: false,
            timer: 3000,
            background: auth.isDark ? '#000' : '#fff',
            color: auth.isDark ? '#fff' : '#000'
          })
          return true
        }
      } catch (err) {
        console.error("AHMADCLOTHS UPDATE ERROR:", err.response || err);
        this.error = 'Update protocol failed.'

        Swal.fire({
          icon: 'error',
          title: 'AhmadClothes House - Update Error',
          text: this.error,
          background: auth.isDark ? '#000' : '#fff',
          color: auth.isDark ? '#fff' : '#000'
        })
        return false
      } finally {
        this.loading = false
      }
    },

    async removeProduct(id) {
      const auth = useAuthStore()

      // Confirmation first (could also be removed for 'ultimate speed' but safer to keep)
      const result = await Swal.fire({
        title: 'Remove Product?',
        text: "This will permanently remove this item from the database.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#4f46e5',
        confirmButtonText: 'CONFIRM REMOVAL',
        background: auth.isDark ? '#000' : '#fff',
        color: auth.isDark ? '#fff' : '#000'
      });

      if (!result.isConfirmed) return;

      // OPTIMISTIC UPDATE: Remove locally immediately for "fast response"
      const previousProducts = [...this.dynamicProducts];
      this.dynamicProducts = this.dynamicProducts.filter(p => (p._id || p.id) !== id);

      try {
        const res = await api.delete(`/products/${id}`)

        if (res.data.success) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Removed Successfully',
            showConfirmButton: false,
            timer: 2000,
            background: auth.isDark ? '#000' : '#fff',
            color: auth.isDark ? '#fff' : '#000'
          })
        } else {
          throw new Error("API reported failure");
        }
      } catch (err) {
        console.error("Deletion failed, rolling back:", err);
        // ROLLBACK on failure
        this.dynamicProducts = previousProducts;

        Swal.fire({
          icon: 'error',
          title: 'Removal Failed',
          text: 'The database could not process the removal. Restoring item.',
          background: auth.isDark ? '#000' : '#fff',
          color: auth.isDark ? '#fff' : '#000'
        })
      }
    },

    async incrementView(id) {
      if (typeof id !== 'string' || id.length < 10) return; // Ignore seed ids for live tracking
      try {
        await api.patch(`/products/views/${id}`)
      } catch (err) {
        // Silent fail for non-critical tracking
      }
    },

    async recordSale(id, quantity = 1) {
      if (typeof id !== 'string' || id.length < 10) return;
      try {
        await api.post(`/products/sale/${id}`, { quantity })
        await this.fetchProducts() // Refresh to see new stats
      } catch (err) {
        console.error("Sale recording failed")
      }
    }
  }
})
