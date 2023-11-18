import axios from 'axios'
import Cookies from 'js-cookie'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token') || '-------------no-token-------------'

    if (token) {
      // @ts-ignore
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

// intercepa 401 e manda para o login
api.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login'
    }

    return Promise.reject(error)
  }
)
