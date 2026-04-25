import { defineStore } from 'pinia'
import api from '../api';
import Swal from 'sweetalert2'

export const useAuthStore = defineStore('auth', {
  state: () => {
    const savedTheme = localStorage.getItem('theme')

    const storedUser = localStorage.getItem('user')
    const user = (storedUser && storedUser !== 'undefined') ? JSON.parse(storedUser) : null

    return {
      user,
      token: localStorage.getItem('token') || null,
      isDark: savedTheme ? savedTheme === 'dark' : true, // Default to dark theme
      users: [], // Store all user identities

      loading: false,
      error: null
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin'
  },
  actions: {
    async signup(userData) {
      this.loading = true
      try {
        const res = await api.post('/auth/register', userData)
        this.token = res.data.token
        this.user = res.data.user
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))

        Swal.fire({
          icon: 'success',
          title: 'AhmadClothes House - Identity Created',
          text: `Welcome, ${this.user.name}.`,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000',
          confirmButtonColor: '#4f46e5'
        })
        return true
      } catch (err) {
        this.error = err.response?.data?.error || 'Signup Failed'
        Swal.fire({
          icon: 'error',
          title: 'Protocol Failed',
          text: this.error,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000',
          confirmButtonColor: '#4f46e5'
        })
        return false
      } finally {
        this.loading = false
      }
    },
    async login(credentials) {
      this.loading = true
      try {
        const res = await api.post('/auth/login', credentials)
        this.token = res.data.token
        this.user = res.data.user
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000'
        });
        Toast.fire({
          icon: "success",
          title: "AhmadClothes House - Authenticated"
        });

        return true
      } catch (err) {
        this.error = err.response?.data?.error || 'Login Failed'
        Swal.fire({
          icon: 'error',
          title: 'AhmadClothes House - Access Denied',
          text: this.error,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000',
          confirmButtonColor: '#4f46e5'
        })
        return false
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'info',
        title: 'AhmadClothes House - Session Ended',
        showConfirmButton: false,
        timer: 2000,
        background: this.isDark ? '#000' : '#fff',
        color: this.isDark ? '#fff' : '#000'
      })
    },

    // User Management Actions
    async fetchUsers() {
      this.loading = true
      try {
        const res = await api.get('/auth/users')
        if (res.data.success) {
          // Add a property to each user to track password visibility toggle
          this.users = res.data.data.map(u => ({ ...u, showPass: false }))
        }
      } catch (err) {
        this.error = err.response?.data?.error || 'Failed to fetch users'
      } finally {
        this.loading = false
      }
    },
    async updateExternalUser(userId, userData) {
      this.loading = true
      try {
        await api.put(`/auth/users/${userId}`, userData)
        await this.fetchUsers() // Refresh
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Identity Synchronized',
          showConfirmButton: false,
          timer: 2000,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000'
        })
        return true
      } catch (err) {
        this.error = err.response?.data?.error || 'Update failed'
        Swal.fire({
          icon: 'error',
          title: 'Protocol Error',
          text: this.error,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000'
        })
        return false
      } finally {
        this.loading = false
      }
    },
    async deleteExternalUser(userId) {
      const result = await Swal.fire({
        title: 'Delete User?',
        text: "This identity will be permanently removed from the AhmadClothes House registry.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#4f46e5',
        confirmButtonText: 'REMOVE IDENTITY',
        cancelButtonText: 'ABORT',
        background: this.isDark ? '#000' : '#fff',
        color: this.isDark ? '#fff' : '#000'
      });

      if (!result.isConfirmed) return false;

      this.loading = true
      try {
        await api.delete(`/auth/users/${userId}`)
        await this.fetchUsers() // Refresh
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Identity Excised',
          showConfirmButton: false,
          timer: 2000,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000'
        })
        return true
      } catch (err) {
        this.error = 'Deletion failed'
        Swal.fire({
          icon: 'error',
          title: 'Internal Protocol Error',
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000'
        })
        return false
      } finally {
        this.loading = false
      }
    },

    async googleLogin(credential) {
      this.loading = true
      this.error = null
      try {
        const res = await api.post('/auth/google-login', { credential })
        this.token = res.data.token
        this.user = res.data.user
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))

        Swal.fire({
          icon: 'success',
          title: 'Google Identity Authenticated',
          text: `Welcome, ${this.user.name}.`,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000',
          confirmButtonColor: '#4f46e5'
        })
        return true
      } catch (err) {
        this.error = err.response?.data?.error || 'Google Login Failed'
        Swal.fire({
          icon: 'error',
          title: 'Authentication Blocked',
          text: this.error,
          background: this.isDark ? '#000' : '#fff',
          color: this.isDark ? '#fff' : '#000'
        })
        return false
      } finally {
        this.loading = false
      }
    },

    toggleTheme() {
      this.isDark = !this.isDark
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
      this.applyTheme()
    },
    initializeTheme() {
      const savedTheme = localStorage.getItem('theme')
      
      // Force Dark Mode by default if no preference is saved
      if (!savedTheme) {
        this.isDark = true
        localStorage.setItem('theme', 'dark')
      } else {
        this.isDark = savedTheme === 'dark'
      }

      this.applyTheme()
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
})


