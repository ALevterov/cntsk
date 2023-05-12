import BlackTitle from '@/components/ui/Common/BlackTitle/BlackTitle'
import styles from './ServicesSection.module.css'
import global from '@/styles/global.module.css'
import { useEffect, useState } from 'react'
import OrderBtn from '@/components/ui/Common/OrderBtn/OrderBtn'
import services from '@/helpers/services'
import useDebounce from '@/hooks/useDebounce'
const ServicesSection = () => {
  const [input, setInput] = useState('')
  const searchString = useDebounce(input, 1000)
  const [orderActive, setOrderActive] = useState(false)
  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e)
    setInput(e.target.value)
  }
  useEffect(() => {
    console.log('logic here!')
  }, [searchString])
  return (
    <div className={styles.section}>
      <div className={global.container}>
        <div className={styles.top}>
          <BlackTitle color='white'>Услуги</BlackTitle>
          <div className={styles.topText}>
            Для вашего удобства, мы предлагаем воспользоваться поиском. Укажите
            какие задачи вам необходимо реализовать. <br /> Затем оставьте
            заявку, и наш менеджер свяжется с вами, чтобы уточнить детали.
          </div>
        </div>
        <div className={styles.inputBlock}>
          <div className={styles.inputWrapper}>
            <input
              type='text'
              value={input}
              onChange={handleChangeInput}
              className={styles.input}
              placeholder='Расскажите, что Вам необходимо. Оставьте заявку, и мы поможем вам реализовать задачу.'
            />
          </div>
          <div className={styles.inputWrapperBottom}>
            <div className={styles.solveText}>наше решение для вас:</div>
            <div className={styles.solveItems}></div>
            <OrderBtn active={orderActive}>Заказать</OrderBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
