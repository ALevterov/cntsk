import { Field } from 'formik'
import styles from './CustomInput.module.css'

interface IInputProps {
  id: string
  errors: any
  touched: boolean
  onChange: () => void
  value: string
}

const CustomInput = ({ id, errors, touched, onChange, value }: IInputProps) => {
  const classes = [styles.inputWrapper]

  // console.log('errors:', errors)
  // console.log('touched:', touched)
  // console.log('value:', value)

  if (touched && errors) {
    classes.push(styles.error)
  }
  return (
    <div className={classes.join(' ')}>
      <Field
        className={styles.input}
        type='text'
        name={id}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default CustomInput
