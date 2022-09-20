import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

const App = () => {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [lst, setLst] = useState(new Values('#92b1f8').all(10))

  const handleSubmit = (e) => {
    try {
      e.preventDefault()
      let colors = new Values(color).all(5)
      setLst(colors)
      console.log(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
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
            placeholder="#92b1f8"
            className={`${error ? 'error' : null}`}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>

      <section className="colors">
        {lst.map((color, index) => {
          console.log(color)
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}
export default App
