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
      // Local mode: already has state.orders
      return;
    },
    async fetchUserOrders(userId) {
      // Local mode
      return;
    },
    async updateOrderStatus(orderId, status) {
      const auth = useAuthStore()
      const idx = this.orders.findIndex(o => String(o._id || o.id) === String(orderId))
      if (idx !== -1) {
        this.orders[idx].status = status
      }
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'AhmadClothes House - Status Updated',
        text: `Order status moved to ${status} (Local only)`,
        showConfirmButton: false,
        timer: 3000,
        background: auth.isDark ? '#000' : '#fff',
        color: auth.isDark ? '#fff' : '#000'
      })
      return true
    },
    async updateOrderTracking(orderId, trackingNumber, carrier = 'BlueEx Luxury') {
      const auth = useAuthStore()
      const idx = this.orders.findIndex(o => String(o._id || o.id) === String(orderId))
      if (idx !== -1) {
        this.orders[idx].tracking = { trackingNumber, carrier }
      }
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'AhmadClothes House - Tracking Updated',
        text: `Reference ${trackingNumber} registered (Local only)`,
        showConfirmButton: false,
        timer: 3000,
        background: auth.isDark ? '#000' : '#fff',
        color: auth.isDark ? '#fff' : '#000'
      })
      return true
    },
    async createOrder(orderData) {
      this.loading = true
      try {
        // CALL NOTIFY ENDPOINT (Sends Gmail to Admin/Customer without DB write)
        await api.post('/orders/notify', orderData)
      } catch (err) {
        console.warn("ORDER_NOTIFY_ERROR: Could not send Gmail alert", err)
      }

      // Still handle the order locally for UI consistency
      const newOrder = {
        ...orderData,
        _id: 'ord_' + Math.random().toString(36).substring(2, 11),
        status: 'pending',
        createdAt: new Date().toISOString()
      }
      this.orders.unshift(newOrder)
      this.loading = false
      return newOrder
    }
  }
})
