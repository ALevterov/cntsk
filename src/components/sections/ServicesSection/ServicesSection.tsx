import BlackTitle from '@/components/ui/Common/BlackTitle/BlackTitle'
import styles from './ServicesSection.module.css'
import global from '@/styles/global.module.css'
import { useEffect, useState } from 'react'
import OrderBtn from '@/components/ui/Common/OrderBtn/OrderBtn'
import services from '@/helpers/services'
import useDebounce from '@/hooks/useDebounce'
import findServicesByString from '../../../helpers/findServicesByString'
import OrderFindedItem from '@/components/ui/Common/OrderFindedItem/OrderFindedItem'
import SearchServiceIcon from '@/icons/SearchServiceIcon'
const ServicesSection = () => {
  const [services, setServices] = useState<string[] | []>([])
  const [input, setInput] = useState('')
  const searchString = useDebounce(input, 300)
  const [orderActive, setOrderActive] = useState(false)
  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e)
    setInput(e.target.value)
  }
  useEffect(() => {
    console.log('logic here!')
    const { result: services, words } = findServicesByString(searchString)
    console.log(words)
    console.log(services)
    setServices(services)
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
            <SearchServiceIcon />
          </div>
          <div className={styles.inputWrapperBottom}>
            <div className={styles.solveText}>наше решение для вас:</div>
            <div className={styles.solveItems}>
              {services.length &&
                services.map(service => (
                  <OrderFindedItem key={service}>{service}</OrderFindedItem>
                ))}
            </div>
            <OrderBtn active={services[0] !== 'индивидуальные условия'}>
              Заказать
            </OrderBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
