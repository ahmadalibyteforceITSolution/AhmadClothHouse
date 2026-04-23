import { defineStore } from 'pinia'
import api from '../api'
import Swal from 'sweetalert2'
import { useAuthStore } from './auth'
import { products as localProducts } from '../constants/products'

export const useProductsStore = defineStore('products', {
  state: () => ({
    allProducts: [...localProducts],
    loading: false,
    error: null
  }),
  getters: {
    products: (state) => {
      return state.allProducts.map(p => ({
        ...p,
        isDynamic: false
      }));
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
      // Disabled API fetch to prevent database overload
      console.log("AHMADCLOTHS: Using hardcoded frontend products.");
      this.loading = false;
      return;
    },

    async fetchAdminProducts(force = false) {
      this.loading = false;
      return;
    },

    async fetchProductById(id) {
      return this.products.find(p => String(p.id) === String(id));
    },

    async uploadImage(file) {
      // Mock upload for hardcoded frontend mode
      this.loading = true;
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.loading = false;
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    },

    async addProduct(prodData) {
      const auth = useAuthStore()
      this.loading = true
      
      const newProduct = {
        id: `local-${Date.now()}`,
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

      this.allProducts.unshift(newProduct);
      this.loading = false;

      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Local Update Only',
        text: `${newProduct.name} added to local catalog (Not persistent).`,
        showConfirmButton: false,
        timer: 3000,
        background: auth.isDark ? '#000' : '#fff',
        color: auth.isDark ? '#fff' : '#000'
      })
      return true
    },

    async updateProduct(id, prodData) {
      const auth = useAuthStore()
      this.loading = true
      
      const idx = this.allProducts.findIndex(p => String(p.id) === String(id));
      if (idx !== -1) {
        const updated = {
          ...this.allProducts[idx],
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
          updated.image = prodData.imageUrl;
          updated.filterImageUrl = prodData.filterImageUrl;
        }
        this.allProducts[idx] = updated;
      }

      this.loading = false
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Local Update Only',
        text: `Product modified in local catalog.`,
        showConfirmButton: false,
        timer: 3000,
        background: auth.isDark ? '#000' : '#fff',
        color: auth.isDark ? '#fff' : '#000'
      })
      return true
    },

    async removeProduct(id) {
      const auth = useAuthStore()
      const result = await Swal.fire({
        title: 'Remove Locally?',
        text: "This will remove the item from the current view only.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#4f46e5',
        confirmButtonText: 'REMOVE',
        background: auth.isDark ? '#000' : '#fff',
        color: auth.isDark ? '#fff' : '#000'
      });

      if (!result.isConfirmed) return;

      this.allProducts = this.allProducts.filter(p => String(p.id) === String(id));
      
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Removed Locally',
        showConfirmButton: false,
        timer: 2000,
        background: auth.isDark ? '#000' : '#fff',
        color: auth.isDark ? '#fff' : '#000'
      })
    },

    async incrementView(id) {
      // Disabled for local mode
    },

    async recordSale(id, quantity = 1) {
      // Disabled for local mode
    }
  }
})
