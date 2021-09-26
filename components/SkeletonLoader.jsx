import styles from '../styles/SkeletonLoader.module.css'

export const SkeletonLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pulse}>
      </div>
      <div className={styles.pulse}>
      </div>
      <div className={styles.pulse}>
      </div>
    </div>
  )
}
