import { createContext, useContext, useState } from "react"

const CountryContext = createContext()
export const useCountry = () => {
  return useContext(CountryContext)
}

export const CountryProvider = ({ children }) => {
  const [currentCountry, setCurrentCountry] = useState({
    code: 'MX',
    name: 'Mexico'
  })

  const updateCountry = (countryCode, countryName) => {
    setCurrentCountry({
      code: countryCode,
      name: countryName
    })
  }

  return (
    <CountryContext.Provider value={{ currentCountry, updateCountry }}>
      {children}
    </CountryContext.Provider>
  )
}
