import PropTypes from 'prop-types'

import styles from '../styles/SkeletonLoader.module.css'

export const SkeletonLoader = ({ type }) => {
  return (
    <div className={`${type === "weather" ? styles.weather : styles.time} ${styles.container}`}>
      <div className={styles.pulse}>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.pulse}>
        </div>
        <div className={styles.pulse}>
      </div>
      </div>
    </div>
  )
}

SkeletonLoader.propTypes = {
  type: PropTypes.oneOf(['weather', 'time'])
}
