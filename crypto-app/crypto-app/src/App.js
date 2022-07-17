import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './components/Coin'

const url =
  ' https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
const App = () => {
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const fetchInfo = async () => {
    try {
      const response = await axios.get(url)
      const newInfo = await response.data
      setInfo(newInfo)
      setLoading(false)
      console.log(newInfo)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchInfo()
  }, [])
  if (loading) {
    return <h1>loading</h1>
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoin = info.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"> Search</h1>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="Search for a coin"
          />
        </form>
      </div>
      {filteredCoin.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>
  )
}

export default App
