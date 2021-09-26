import Image from 'next/image'

import { useCountry } from "."
import styles from '../styles/Country.module.css'

export const Country = () => {
  const { currentCountry } = useCountry()

  return (
    <div className={styles.container}>
      <span className="h3">{currentCountry.name}</span>
      <Image
        src={`https://www.countryflags.io/${currentCountry.code}/flat/64.png`}
        alt={currentCountry.name}
        width="64"
        height="64"
        layout="fixed"
      />
    </div>
  )
}
