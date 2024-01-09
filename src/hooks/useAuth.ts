import Cookies from 'js-cookie'
import { api } from '../services/axios'
import useAuthenticated from '../stores/useAuthenticated'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

export function useAuth() {
  const { setAuthenticated } = useAuthenticated()
  const router = useRouter()

  async function checkToken() {
    try {
      await api.get('/auth/check-token')
      setAuthenticated(true)
    } catch (error: any) {
      setAuthenticated(false)
    }
  }

  function handleLogout() {
    Cookies.remove('YOURPROJECT_token')
    Cookies.remove('YOURPROJECT_role')
    router.push('/')
    toast.success('Logout realizado com sucesso')
  }

  return {
    checkToken,
    handleLogout,
  }
}
