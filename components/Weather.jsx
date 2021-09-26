import { useEffect, useState } from "react"
import Image from 'next/image'

import { ErrorCard, SkeletonLoader, useTimeZone } from "."
import styles from '../styles/Weather.module.css'

export const Weather = () => {
  const { currentTimeZone } = useTimeZone()
  const [weatherReport, setWeatherReport] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const getWeatherReport = () => {
    setError('')
    setIsLoading(true)

    fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${currentTimeZone}&aqi=no`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setWeatherReport(data.current)
      })
      .catch((err) => {
        console.error(err)
        setError(`No se pudo conseguir el estado del tiempo actual de ${currentTimeZone}.\nIntenta de nuevo recargando la página`)
      })
      .finally(() =>
        setIsLoading(false)
      )
  }

  useEffect(() => {
    getWeatherReport()
  }, [currentTimeZone]) 

  if(isLoading) {
    return <SkeletonLoader />
  }
  if(error) {
    return <ErrorCard error={error} />
  }

  return (
    <div className={styles.container}>
      <Image
        src={`https:${weatherReport?.condition.icon}`}
        alt={weatherReport?.condition.text}
        layout="fixed"
        width="80"
        height="80"
        objectFit="cover"
        objectPosition="center"
      />

      <div className={styles.containerText}>
        <span className={styles.temperature}>{weatherReport?.temp_c} Cº</span>
        <span>{weatherReport?.condition.text}</span>
      </div>
    </div>
  )
}
