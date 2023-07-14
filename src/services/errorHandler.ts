import Cookies from 'js-cookie'
import toast from 'react-hot-toast'


export function errorHandler(error: any) {
  if(error?.response?.status === 401) {
    toast.error('Sessão expirada, faça login novamente')
    Cookies.remove('token')
    return window.location.href = '/'
  }
  try {
    toast.error(error?.response?.data.message)
  } catch (error) {
    toast.error('Ocorreu um erro no servidor, tente novamente mais tarde')
  }
}
