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

      // ONLY use dynamic products from the MongoDB API so we don't flash fake local data during loading!
      const items = state.dynamicProducts;
      return items.map(p => {
        let img = p.image || p.imageUrl || ''
        
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
    async fetchProducts() {
      this.loading = true
      try {
        const res = await api.get('/products')
        if (res.data.success) {
          this.dynamicProducts = res.data.data;
        }
      } catch (err) {
        console.error("AHMADCLOTHS SYNC ERROR:", err);
        this.error = 'Failed to sync with Ahmadcloths database'
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
      this.loading = true
      try {
        const formData = new FormData()
        formData.append('image', file)
        const res = await api.post('/products/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if (res.data.success) {
          return res.data.url
        }
      } catch (err) {
        console.error("IMAGE UPLOAD ERROR:", err)
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
          description: `Signature ${prodData.nature} Collection.`,
          details: ["Dynamic Backend Persistence", "Fudgeables Secured", "Freshly Baked"]
        }
        
     
        const res = await api.post('/products', payload)
        if (res.data.success) {

          await this.fetchProducts()
          
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
        console.error("FUDGEABLES UPLOAD ERROR:", err.response || err);
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
      
          await this.fetchProducts()
          
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
        console.error("FUDGEABLES UPDATE ERROR:", err.response || err);
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
      // Check if it's dynamic
      if (typeof id === 'string' || id.length > 20) { // MongoDB ObjectId usually
        const result = await Swal.fire({
          title: 'Remove Product?',
          text: "Protocol will permanently remove this item from the AhmadClothes House registry.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#4f46e5',
          confirmButtonText: 'CONFIRM REMOVAL',
          background: auth.isDark ? '#000' : '#fff',
          color: auth.isDark ? '#fff' : '#000'
        });

        if (!result.isConfirmed) return;

        try {
          await api.delete(`/products/${id}`)
          await this.fetchProducts()
          
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'AhmadClothes House - Registry Updated',
            showConfirmButton: false,
            timer: 2000,
            background: auth.isDark ? '#000' : '#fff',
            color: auth.isDark ? '#fff' : '#000'
          })
        } catch (err) {
          console.error("Deletion at database failed.")
          Swal.fire({
            icon: 'error',
            title: 'AhmadClothes House - Registry Protocol Failed',
            background: auth.isDark ? '#000' : '#fff',
            color: auth.isDark ? '#fff' : '#000'
          })
        }
      } else {
        // Fallback for local storage (if any left) or seed (though seed is usually protected)
        this.dynamicProducts = this.dynamicProducts.filter(p => p.id !== id)
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
