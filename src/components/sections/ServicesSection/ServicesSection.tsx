import BlackTitle from '@/components/ui/Common/BlackTitle/BlackTitle'
import styles from './ServicesSection.module.css'
import global from '@/styles/global.module.css'
import { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import OrderBtn from '@/components/ui/Common/OrderBtn/OrderBtn'
import useDebounce from '@/hooks/useDebounce'
import findServicesByString from '../../../helpers/findServicesByString'
import OrderFindedItem from '@/components/ui/Common/OrderFindedItem/OrderFindedItem'
import SearchServiceIcon from '@/icons/SearchServiceIcon'
import SelectItem from '@/components/ui/Sections/ServicesSection/SelectItem/SelectItem'
import Modal from '@/components/ui/Sections/ServicesSection/SelectItem/Modal/Modal'

interface InputEvent extends React.MouseEvent<HTMLInputElement> {
  target: HTMLInputElement
}

const selectItems = [
  'Мониторинг и работа с негативом',
  'Удаление негатива из источников',
  'Формирование положительного образа',
  'Распространение положительной информации',
  'Публикации',
  'Работа с зарубежными СМИ',
  'Создание вирусного контента',
  'Комплексная PR-поддержка',
  'Управление репутацией',
  'Работа с интернет-СМИ, журналистами и лидерами мнений',
  'Инфлюенс  маркетинг',
  'Продвижение',
  'Поддержание репутации',
  'Работа с поисковой выдачей',
  'Публикации в зарубежным СМИ',
  'Работа с общественным мнением',
]

const ServicesSection = () => {
  const [services, setServices] = useState<string[] | []>([])
  const [input, setInput] = useState('')
  const searchString = useDebounce(input, 300)
  const [fieldActive, setFieldActive] = useState<'input' | 'select'>('input')
  const [selected, setSelected] = useState<string[] | []>([])

  const [modalOpened, setModalOpened] = useState(false)

  const onSubmit = () => {
    setServices([])
    setSelected([])
  }

  const onModalClose = () => {
    setModalOpened(false)
    document.querySelector('html')?.classList.remove('no-overflow')
  }

  const onModalOpen = () => {
    setModalOpened(true)
    document.querySelector('html')?.classList.add('no-overflow')
  }

  useEffect(() => {
    if (searchString !== '') {
      const { result: services, words } = findServicesByString(searchString)
      setServices(services)
    }
    if (searchString === '') {
      setServices([])
    }
  }, [searchString])

  const handleInputFocus = useCallback(() => {
    if (fieldActive === 'select') {
      setFieldActive('input')
    }
  }, [fieldActive])

  const handleChangeInput = useCallback((e: any): any => {
    setInput(e.target.value)
  }, [])
  const handleSelectFocus = useCallback(() => {
    if (fieldActive === 'input') {
      setFieldActive('select')
    }
  }, [fieldActive])
  const handleChangeSelected = useCallback(
    (selectedItem: string, isActive: boolean) => {
      if (!isActive) {
        setSelected(prev => [...prev, selectedItem])
      }
      if (isActive) {
        setSelected(prev => prev.filter(item => item !== selectedItem))
      }
      if (fieldActive === 'input') {
        setFieldActive('select')
      }
    },
    [fieldActive]
  )

  return (
    <>
      <div className={styles.section} id='services'>
        <div className={global.container}>
          <div className={styles.top}>
            <BlackTitle color='white'>Услуги</BlackTitle>
            <div className={styles.topText}>
              Для вашего удобства, мы предлагаем воспользоваться поиском.
              Укажите какие задачи вам необходимо реализовать. Затем оставьте
              заявку, и наш менеджер свяжется с вами, чтобы уточнить детали.
            </div>
          </div>
          <div
            className={[
              styles.inputBlock,
              fieldActive === 'select' ? styles.blockPassive : '',
            ].join(' ')}
            onClick={handleInputFocus}
          >
            <div className={styles.inputWrapper}>
              <textarea
                value={input}
                onChange={handleChangeInput}
                className={[styles.input, styles.textarea].join(' ')}
                placeholder='Расскажите, что Вам необходимо. Оставьте заявку, и мы поможем вам реализовать задачу.'
                onFocus={handleInputFocus}
              />
              <input
                type='text'
                value={input}
                onChange={handleChangeInput}
                className={[styles.input, styles.desktopInput].join(' ')}
                placeholder='Расскажите, что Вам необходимо. Оставьте заявку, и мы поможем вам реализовать задачу.'
                onFocus={handleInputFocus}
              />
              <SearchServiceIcon />
            </div>
            <div className={styles.inputWrapperBottom}>
              <div className={styles.solveText}>наше решение для вас:</div>
              {services.length !== 0 && (
                <div className={styles.solveItems}>
                  {services.map(service => (
                    <OrderFindedItem key={service}>{service}</OrderFindedItem>
                  ))}
                </div>
              )}
              <OrderBtn
                active={services.length !== 0 && fieldActive === 'input'}
                onClick={onModalOpen}
              >
                Заказать
              </OrderBtn>
            </div>
          </div>
          <div
            className={[
              styles.selectBlock,
              fieldActive === 'input' ? styles.blockPassive : '',
            ].join(' ')}
            onClick={handleSelectFocus}
          >
            <h3 className={styles.selectTitle}>
              Или выберите интересующие вас услуги из списка
            </h3>
            <div
              className={[styles.selectItemsContainer, styles.desktop].join(
                ' '
              )}
            >
              {selectItems.map(item => (
                <SelectItem
                  key={item}
                  onChangeSelected={handleChangeSelected}
                  active={selected.some(sel => sel === item)}
                >
                  {item}
                </SelectItem>
              ))}
            </div>
            <OrderBtn
              active={fieldActive === 'select' && selected.length !== 0}
              onClick={onModalOpen}
            >
              Заказать выбранную услугу
            </OrderBtn>
          </div>
        </div>
      </div>
      <Modal
        type={fieldActive}
        services={fieldActive === 'select' ? selected : services}
        opened={modalOpened}
        onClose={onModalClose}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default ServicesSection
