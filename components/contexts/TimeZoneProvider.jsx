import { createContext, useContext, useState } from "react"

const TimeZoneContext = createContext()
export const useTimeZone = () => {
  return useContext(TimeZoneContext)
}

export const TimeZoneProvider = ({ children }) => {
  const [currentTimeZone, setCurrentTimeZone] = useState('')

  const updateTimeZone = (timeZone) => {
    setCurrentTimeZone(timeZone)
  }

  return (
    <TimeZoneContext.Provider value={{ currentTimeZone, updateTimeZone }}>
      {children}
    </TimeZoneContext.Provider>
  )
}
