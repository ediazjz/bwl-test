import PropTypes from 'prop-types'

import styles from '../styles/ErrorCard.module.css'

export const ErrorCard = ({ error }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{error}</span>
    </div>
  )
}

ErrorCard.propTypes = {
  error: PropTypes.string.isRequired
}
