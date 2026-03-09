import { useEffect, useState } from "react"
import { getWeather } from "../services/weatherService"
import type { WeatherForecast } from "../services/weatherService"

function Weather() {

  const [data, setData] = useState<WeatherForecast[]>([])

  const loadWeather = async () => {
    const result = await getWeather()
    setData(result)
  }

  useEffect(() => {
    loadWeather()
  }, [])

  return (
    <div>
      <h2>Weather Forecast</h2>

      {data.map((item, index) => (
        <div key={index}>
          <p>Date: {item.date}</p>
          <p>Temp C: {item.temperatureC}</p>
          <p>Temp F: {item.temperatureF}</p>
          <p>Summary: {item.summary}</p>
          <hr />
        </div>
      ))}

    </div>
  )
}

export default Weather