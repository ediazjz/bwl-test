import { useEffect, useState } from "react"

import { ErrorCard, SkeletonLoader, useTimeZone } from "."
import styles from '../styles/Time.module.css'

export const Time = () => {
  const { currentTimeZone } = useTimeZone()
  const [time, setTime] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')


  const getTime = () => {
    setError('')
    setIsLoading(true)

    fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.NEXT_PUBLIC_TIME_ZONE_API_KEY}&format=json&by=zone&zone=${currentTimeZone}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setTime(new Date(data.formatted))
      })
      .catch((err) => {
        console.error(err)
        setError(`No se pudo conseguir la hora en vivo de ${currentTimeZone}.\nIntenta de nuevo recargando la página`)
      })
      .finally(() =>
        setIsLoading(false)
      )
  }

  useEffect(() => {
    getTime()
  }, [currentTimeZone])

  if(isLoading) {
    return <SkeletonLoader />
  }
  if(error) {
    return <ErrorCard error={error} />
  }

  const addZeroBefore = date => {
    return (date < 10 ? '0' : '') + date;
  }

  return (
    <div className={styles.container}>
      <span className={styles.clock}>
        {time?.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
      </span>
    </div>
  )
}
