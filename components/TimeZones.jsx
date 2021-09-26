import { useEffect, useState } from "react"

import { ErrorCard, SkeletonLoader, useCountry, useTimeZone } from "."
import styles from '../styles/Lists.module.css'

export const TimeZones = () => {
  const { currentCountry } = useCountry()
  const { currentTimeZone, updateTimeZone } = useTimeZone()
  const [timeZonesList, setTimeZonesList] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const getTimeZones = () => {
    setError('')
    setIsLoading(true)

    fetch(`http://api.timezonedb.com/v2.1/list-time-zone?key=${process.env.NEXT_PUBLIC_TIME_ZONE_API_KEY}&format=json&country=${currentCountry.code}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setTimeZonesList(data.zones)
      })
      .catch(err => {
        console.error(err)
        setError(`No se pudieron conseguir las zonas horarias de ${currentCountry.name}.\nIntenta de nuevo recargando la página`)
      })
      .finally(() => 
        setIsLoading(false)
      )
  }

  useEffect(() => {
    getTimeZones()
  }, [currentCountry])

  const standardizeZoneName = (string) => {
    const newString = string.split("/").pop().replace(/_/g, ' ')
    return newString
  }

  if(isLoading) {
    return <SkeletonLoader />
  }
  if(error) {
    return <ErrorCard error={error} />
  }

  return (
    <ul className={styles.timeZones}>
      {timeZonesList?.map((zone, index) => {
        return (
          <li key={index} className={`${styles.item} ${currentTimeZone === standardizeZoneName(zone.zoneName) && styles.itemActive}`}>
            <button className={`btn ${styles.button}`} onClick={() => updateTimeZone(standardizeZoneName(zone.zoneName))}>
              {standardizeZoneName(zone.zoneName)}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
