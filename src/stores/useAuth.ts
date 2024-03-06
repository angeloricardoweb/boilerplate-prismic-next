import { api } from '../services/axios'
import useAuthenticated from '../stores/useAuthenticated'

export function useAuth() {
  const { setAuthenticated } = useAuthenticated()

  async function checkToken() {
    try {
      await api.get('/auth/check-token')
      setAuthenticated(true)
    } catch (error: any) {
      setAuthenticated(false)
    }
  }

  return {
    checkToken,
  }
}
