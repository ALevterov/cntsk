import styles from './AdditionalText.module.css'
const AdditionalText = ({ children }: { children: string }) => {
  return <h3 className={styles.text}>{children}</h3>
}

export default AdditionalText
