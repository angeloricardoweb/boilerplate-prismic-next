import React, { useState, useEffect } from 'react'
import { api } from '../services/axios'
import axios from 'axios'

export function Copyright() {
  const [dev, setDev] = useState({
    dev_1: '',
    url_1: '',
    dev_2: '',
    url_2: '',
  })

  async function getUsers() {
    const request_1 = await api.get('angeloricardoweb')
    const request_2 = await api.get('gamadv')

    axios.all([request_1, request_2]).then(axios.spread((...responses) => {
      setDev(
        {
          dev_1: responses[0].data.name,
          url_1: responses[0].data.html_url,
          dev_2: responses[1].data.name,
          url_2: responses[1].data.html_url,
        })
    }))
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div>
      <h2 className='text-sm text-zinc-300'>By: <a href={dev.url_1}>{dev.dev_1}</a>  | <a href={dev.url_2}>{dev.dev_2}</a>  </h2>
    </div>
  )
}
