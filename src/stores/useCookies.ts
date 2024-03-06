import Cookies from 'js-cookie'
import React from 'react'

export function useCookies() {
  function addCookie(key: string, value: string) {
    Cookies.set(key, value)
  }

  function getCookie(value: string) {
    return Cookies.get(value)
  }

  return {
    addCookie,
    getCookie
  }
}
