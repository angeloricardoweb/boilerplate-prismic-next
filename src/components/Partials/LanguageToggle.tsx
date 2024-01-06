import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Icon } from '@iconify/react'

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
        // @ts-ignore
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'pt',
                autoDisplay: false,
                includedLanguages: 'en,pt',
                // @ts-ignore
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        )
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            var addScript = document.createElement('script')
            addScript.setAttribute(
                'src',
                '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
            )
            document.body.appendChild(addScript)
            // @ts-ignore
            window.googleTranslateElementInit = googleTranslateElementInit
        }
    }, [])

    return (
        <>
            <div className="flex gap-2">
                <Icon icon="emojione:flag-for-brazil" className={`text-3xl md:text-xl rounded-full ring-white ${Cookies.get('googtrans') === '/auto/pt' &&
                    'ring-2'
                    }`}
                    onClick={(e) => langChange('/auto/pt', e)} />
                <Icon icon="emojione:flag-for-united-states" className={`text-3xl md:text-xl rounded-full ring-white ${Cookies.get('googtrans') === '/pt/en' &&
                    'ring-2'
                    }`}
                    onClick={(e) => langChange('/auto/en', e)} />
            </div>
            <div id="google_translate_element" className='hidden'></div>
        </>
    )
}
