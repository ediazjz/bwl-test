import { createContext, useContext, useState } from "react"

import PropTypes from 'prop-types'

const TimeZoneContext = createContext()
export const useTimeZone = () => {
  return useContext(TimeZoneContext)
}

export const TimeZoneProvider = ({ children }) => {
  const [currentTimeZone, setCurrentTimeZone] = useState('Mexico City')

  const updateTimeZone = (timeZone) => {
    setCurrentTimeZone(timeZone)
  }

  return (
    <TimeZoneContext.Provider value={{ currentTimeZone, updateTimeZone }}>
      {children}
    </TimeZoneContext.Provider>
  )
}

TimeZoneProvider.propTypes = {
  children: PropTypes.node
}
