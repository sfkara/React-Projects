import React, { useState } from 'react'
import data from './data'
const App = () => {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello lorem')
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {/* <p>Lorem ipsum dolior sit amet</p>
        <p>Lorem ipsum dolior sit amet</p> */}

        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
