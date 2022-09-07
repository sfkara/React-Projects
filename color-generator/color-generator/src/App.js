import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

const App = () => {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [lst, setLst] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('f u science')
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
            placeholder="#333555777"
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>

      <section cla>
        <h3> list goes here</h3>
      </section>
    </>
  )
}
export default App
