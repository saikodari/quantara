import api from "./api";

export interface WeatherForecast {
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

export const getWeather = async (): Promise<WeatherForecast[]> => {
  const response = await api.get("/weatherforecast")
  return response.data
}