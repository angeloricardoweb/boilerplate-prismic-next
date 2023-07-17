/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { api } from '../services/axios'
import { errorHandler } from '../services/errorHandler'

export default function useFetch(url: string) {
  const [data, setData] = useState<any>()

  const [isLoading, setIsLoading] = useState(true)

  function refreshData() {
    getData()
  }

  async function getData() {
    setIsLoading(true)
    try {
      const response = await api.get(url)
      setData(response.data.results)
    } catch (error) {
      errorHandler(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    isLoading,
    refreshData,
  }
}
