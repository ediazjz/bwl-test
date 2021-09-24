import PropTypes from 'prop-types'

import styles from '../styles/DashboardCard.module.css'

export const DashboardCard = ({ className, title, children }) => {
  return (
    <section className={`${className} ${styles.card}`}>
      <h1 className={`h6 ${styles.title}`}>{title}</h1>
      <hr />

      {children}
    </section>
  )
}

DashboardCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}
