import React from 'react'

export function useLog() {
  function log() {
    console.log('log')
  }

  return {
    log,
  }
}


