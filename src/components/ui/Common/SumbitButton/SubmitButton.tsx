import styles from './SubmitButton.module.css'
const SubmitButton = ({
  text,
  disabled,
}: {
  text: string
  disabled: boolean
}) => {
  console.log(disabled)

  return (
    <button className={styles.btn} type='submit' disabled={disabled}>
      {text}
    </button>
  )
}

export default SubmitButton
