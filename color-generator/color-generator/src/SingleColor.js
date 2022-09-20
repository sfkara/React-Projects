import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)

  const bcg = rgb.join(',')
  console.log(bcg)
  // const hex = rgbToHex(...rgb)
  // can use this function or other hex function look at utils and app.js
  const hex_value = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex_value)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex_value}</p>

      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
