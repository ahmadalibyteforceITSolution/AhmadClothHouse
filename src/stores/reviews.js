import { defineStore } from 'pinia'
import api from '../api'

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    productReviews: [],
    allReviews: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchProductReviews(productId) {
      this.loading = true
      try {
        const { data } = await api.get(`/reviews/product/${productId}`)
        this.productReviews = data.data
      } catch (err) {
        this.error = err.response?.data?.error || 'Failed to fetch reviews'
      } finally {
        this.loading = false
      }
    },
    async submitReview(reviewData) {
      try {
        const { data } = await api.post('/reviews', reviewData)
        this.productReviews.unshift(data.data)
        return { success: true }
      } catch (err) {
        return { success: false, error: err.response?.data?.error || 'Failed to submit review' }
      }
    },
    async fetchAllReviews() {
      this.loading = true
      try {
        const { data } = await api.get('/reviews')
        this.allReviews = data.data
      } catch (err) {
        this.error = err.response?.data?.error || 'Failed to fetch reviews'
      } finally {
        this.loading = false
      }
    },
    async deleteReview(id) {
      try {
        await api.delete(`/reviews/${id}`)
        this.allReviews = this.allReviews.filter(r => r._id !== id)
        this.productReviews = this.productReviews.filter(r => r._id !== id)
        return { success: true }
      } catch (err) {
        return { success: false, error: err.response?.data?.error || 'Failed to delete review' }
      }
    },
    async updateReviewStatus(id, status) {
      try {
        const { data } = await api.patch(`/reviews/${id}/status`, { status })
        // Update both lists to reflect the status change
        this.allReviews = this.allReviews.map(r => r._id === id ? data.data : r)
        this.productReviews = this.productReviews.map(r => r._id === id ? data.data : r)
        return { success: true }
      } catch (err) {
        return { success: false, error: err.response?.data?.error || 'Failed to update status' }
      }
    }
  }
})
