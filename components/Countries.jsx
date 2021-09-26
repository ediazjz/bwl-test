import Image from 'next/image'

import { useCountry } from '.'
import styles from '../styles/Lists.module.css'

export const Countries = () => {
  const { currentCountry, updateCountry } = useCountry()

  return (
    <ul>
      {countriesList.map((country, index) => {
        return (
          <li key={index} className={`${styles.item} ${country.code === currentCountry.code && styles.itemActive}`}>
            <button className={`btn ${styles.button}`} onClick={() => updateCountry(country.code, country.name)}>
              <Image
                src={`https://www.countryflags.io/${country.code}/flat/32.png`}
                alt={country.name}
                width="32"
                height="32"
                layout="fixed"
              />
              <span>{country.name}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

const countriesList = [
  {
    code: "MX",
    name: "México"
  },
  {
    code: "NZ",
    name: "Nueva Zelanda"
  },
  {
    code: "US",
    name: "Estados Unidos"
  },
  {
    code: "RU",
    name: "Rusia"
  },
  {
    code: "BR",
    name: "Brasil"
  },
  {
    code: "ES",
    name: "España"
  }
]
