// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { Icon } from '@iconify/react'

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export function LanguageToggle() {
  const langChange = (e: any, evt: any) => {
    evt.preventDefault()
    if (Cookies.get('googtrans')) {
      Cookies.set('googtrans', decodeURI(e))
    } else {
      Cookies.set('googtrans', e)
    }
    window.location.reload()
  }

  const googleTranslateElementInit = () => {
    // eslint-disable-next-line no-new
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'pt',
        autoDisplay: false,
        includedLanguages: 'en,pt',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element',
    )
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const addScript = document.createElement('script')
      addScript.setAttribute(
        'src',
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
      )
      document.body.appendChild(addScript)
      window.googleTranslateElementInit = googleTranslateElementInit
    }
  }, [])

  return (
    <>
      <div className="flex gap-2">
        <Icon
          icon="emojione:flag-for-brazil"
          className={`rounded-full text-3xl ring-white md:text-xl ${
            Cookies.get('googtrans') === '/auto/pt' && 'ring-2'
          }`}
          onClick={(e) => langChange('/auto/pt', e)}
        />
        <Icon
          icon="emojione:flag-for-united-states"
          className={`rounded-full text-3xl ring-white md:text-xl ${
            Cookies.get('googtrans') === '/pt/en' && 'ring-2'
          }`}
          onClick={(e) => langChange('/auto/en', e)}
        />
      </div>
      <div id="google_translate_element" className="hidden"></div>
    </>
  )
}
