import { useEffect, useState } from "react"
import { ErrorCard, SkeletonLoader, useTimeZone } from "."

export const Time = () => {
  const { currentTimeZone } = useTimeZone()
  const [time, setTime] = useState('')
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
        setTime(data.formatted)
      })
      .catch((err) => {
        console.error(err)
        setError(`No se pudo conseguir la hora en vivo de ${currentTimeZone}.\nIntenta de nuevo recargando la página`)
      })
      .finally(() =>
        setIsLoading(false)
      )
  }

  const runClock = (time) => {
    const clock = new Date(time)

    // setInterval(() => {
    //   if(clock) {
    //     clock.setSeconds(clock.getSeconds() + 1)
    //     console.log(clock)
    //   }
    // }, 1000)

    return clock.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })
  }

  useEffect(() => {
    getTime()

    runClock(time)
  }, [currentTimeZone, time])

  if(isLoading) {
    return <SkeletonLoader />
  }
  if(error) {
    return <ErrorCard error={error} />
  }

  return (
    <div>
      {runClock()}
      {/* {time?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })} */}
    </div>
  )
}
