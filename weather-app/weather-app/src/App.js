import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c363597cce5b82345145cf48c507fb46`

  const fetchWeather = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get(url)
        //   console.log(response)
        const newInfo = await response.data
        const newLocation = await newInfo.name
        setLocation(newLocation)
        console.log(newLocation)
        setWeatherInfo(newInfo)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={fetchWeather}
          placeholder="Enter location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{weatherInfo.name}</p>
          </div>
          <div className="temp">
            <h1>
              {weatherInfo.main ? weatherInfo.main.temp.toFixed(1) : null} F
            </h1>
          </div>
          <div className="desc">
            <p>{weatherInfo.weather ? weatherInfo.weather[0].main : null}</p>
          </div>

          {weatherInfo.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                <p>{weatherInfo.main ? weatherInfo.main.feels_like : null} F</p>
                <p>Feels like</p>
              </div>
              <div className="humidity">
                <p>{weatherInfo.main ? weatherInfo.main.humidity : null}%</p>
                <p>Humidity</p>
              </div>

              <div className="wind">
                <p>{weatherInfo.main ? weatherInfo.wind.speed : null} MPH</p>
                <p>Wind</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
