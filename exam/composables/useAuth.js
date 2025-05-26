import { ref, computed } from 'vue'
import { authenticateUser, registerUser } from '~/data/users'

export const useAuth = () => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)

  const getLocalStorage = (key) => {
    if (process.client) {
      return localStorage.getItem(key)
    }
    return null
  }

  const setLocalStorage = (key, value) => {
    if (process.client) {
      localStorage.setItem(key, value)
    }
  }

  const removeLocalStorage = (key) => {
    if (process.client) {
      localStorage.removeItem(key)
    }
  }

  const login = async (email, password) => {
    try {
      const authenticatedUser = authenticateUser(email, password)
      if (authenticatedUser) {
        user.value = authenticatedUser
        setLocalStorage('user', JSON.stringify(authenticatedUser))
        return { success: true }
      }
      return { success: false, message: 'Invalid email or password' }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'An error occurred during login' }
    }
  }

  const register = async (userData) => {
    try {
      const result = registerUser(userData)
      if (result.success) {
        user.value = result.user
        setLocalStorage('user', JSON.stringify(result.user))
      }
      return result
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, message: 'An error occurred during registration' }
    }
  }

  const logout = () => {
    user.value = null
    removeLocalStorage('user')
  }

  const checkAuth = () => {
    const storedUser = getLocalStorage('user')
    if (storedUser) {
      try {
        user.value = JSON.parse(storedUser)
      } catch (e) {
        console.error('Error parsing stored user:', e)
        removeLocalStorage('user')
      }
    }
  }

  if (process.client) {
    checkAuth()
  }

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout
  }
} 