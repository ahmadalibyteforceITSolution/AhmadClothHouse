import { defineStore } from 'pinia'
import api from '../api'
import { useAuthStore } from './auth'
import Swal from 'sweetalert2'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchAllOrders() {
      this.loading = true
      try {
        const res = await api.get('/orders')
        if (res.data.success) {
          this.orders = res.data.data
        }
      } catch (err) {
        console.error("ORDER_STORE_ERROR [FetchAll]:", err)
        this.error = 'Failed to fetch boutique orders'
      } finally {
        this.loading = false
      }
    },
    async fetchUserOrders(userId) {
      this.loading = true
      try {
        const res = await api.get(`/orders/user/${userId}`)
        if (res.data.success) {
          this.orders = res.data.data
        }
      } catch (err) {
        console.error("ORDER_STORE_ERROR [FetchUser]:", err)
        this.error = 'Failed to fetch your fashion archive'
      } finally {
        this.loading = false
      }
    },
    async updateOrderStatus(orderId, status) {
      const auth = useAuthStore()
      try {
        const res = await api.put(`/orders/${orderId}`, { status })
        if (res.data.success) {
          const idx = this.orders.findIndex(o => (o._id || o.id) === orderId)
          if (idx !== -1) {
            this.orders[idx] = res.data.data
          }
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'AhmadClothes House - Status Updated',
            text: `Order status moved to ${status}`,
            showConfirmButton: false,
            timer: 3000,
            background: auth.isDark ? '#000' : '#fff',
            color: auth.isDark ? '#fff' : '#000'
          })
          return true
        }
      } catch (err) {
        console.error("ORDER_STORE_ERROR [UpdateStatus]:", err)
        return false
      }
    },
    async updateOrderTracking(orderId, trackingNumber, carrier = 'BlueEx Luxury') {
      const auth = useAuthStore()
      try {
        const res = await api.put(`/orders/${orderId}`, { 
          tracking: { trackingNumber, carrier } 
        })
        if (res.data.success) {
          const idx = this.orders.findIndex(o => (o._id || o.id) === orderId)
          if (idx !== -1) {
            this.orders[idx] = res.data.data
          }
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'AhmadClothes House - Tracking Updated',
            text: `Reference ${trackingNumber} registered`,
            showConfirmButton: false,
            timer: 3000,
            background: auth.isDark ? '#000' : '#fff',
            color: auth.isDark ? '#fff' : '#000'
          })
          return true
        }
      } catch (err) {
        console.error("ORDER_STORE_ERROR [UpdateTracking]:", err)
        return false
      }
    },
    async createOrder(orderData) {
      this.loading = true
      try {
        const res = await api.post('/orders', orderData)
        if (res.data.success) {
          this.orders.unshift(res.data.data)
          return res.data.data
        }
      } catch (err) {
        console.error("ORDER_STORE_ERROR [Create]:", err)
        throw err
      } finally {
        this.loading = false
      }
    }
  }
})
