import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Currency from './components/Currency'

const App = () => {
  const [currencies, setCurrencies] = useState([])
  const options = {
    method: 'GET',
    url: 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD',
    headers: {
      'X-RapidAPI-Key': '4841c03cfamsha47499671dcce26p16b8d5jsn0c954f801bda',
      'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com',
    },
  }

  const getData = async () => {
    try {
      const response = await axios.request(options)
      const currency = await response.data
      console.log(currency)
      const lastCur = await currency.rates
      console.log(lastCur)
      setCurrencies(currency)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="container">
      <h1>Convert</h1>
      <Currency cur={currencies} />
      <div className="equals">=</div>
      <Currency cur={currencies} />
    </div>
  )
}
export default App
