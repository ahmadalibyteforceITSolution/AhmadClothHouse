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
        this.error = err.response?.data?.error || 'Failed to fetch orders'
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
        this.error = err.response?.data?.error || 'Failed to fetch user orders'
      } finally {
        this.loading = false
      }
    },
    async updateOrderStatus(orderId, status) {
      const auth = useAuthStore()
      try {
        await api.patch(`/orders/${orderId}/status`, { status })
        const idx = this.orders.findIndex(o => String(o._id || o.id) === String(orderId))
        if (idx !== -1) {
          this.orders[idx].status = status
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
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: err.response?.data?.error || 'Failed to update order status',
          background: auth.isDark ? '#000' : '#fff',
          color: auth.isDark ? '#fff' : '#000'
        })
        return false
      }
    },
    async updateOrderTracking(orderId, trackingNumber, carrier = 'BlueEx Luxury') {
      const auth = useAuthStore()
      try {
        await api.patch(`/orders/${orderId}/tracking`, { trackingNumber, carrier })
        const idx = this.orders.findIndex(o => String(o._id || o.id) === String(orderId))
        if (idx !== -1) {
          this.orders[idx].tracking = { trackingNumber, carrier }
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
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: err.response?.data?.error || 'Failed to update tracking information',
          background: auth.isDark ? '#000' : '#fff',
          color: auth.isDark ? '#fff' : '#000'
        })
        return false
      }
    },
    async createOrder(orderData) {
      this.loading = true
      try {
        // CALL NOTIFY ENDPOINT (Sends Gmail to Admin/Customer without DB write)
        await api.post('/orders/notify', orderData)
        console.log("AHMADCLOTHS: Gmail notification sent successfully.")
      } catch (err) {
        console.error("ORDER_NOTIFY_ERROR: Could not send Gmail alert.", err)
        // If it's a 404, maybe the server hasn't been updated?
        if (err.response?.status === 404) {
          console.warn("SERVER_OUT_OF_SYNC: The /notify endpoint was not found. Please ensure the backend is redeployed.")
        }
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
