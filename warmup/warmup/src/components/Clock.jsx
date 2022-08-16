import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Clock = () => {
  const [clockState, setClockState] = useState()

  useEffect(() => {
    setInterval(() => {
      const data = new Date()
      setClockState(data.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <div style={{ fontSize: '55px', 'text-align': 'center' }}>{clockState}</div>
  )
}
export default Clock
