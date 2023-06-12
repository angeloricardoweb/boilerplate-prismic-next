import axios from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('token') || 'sem token nos cookies'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
