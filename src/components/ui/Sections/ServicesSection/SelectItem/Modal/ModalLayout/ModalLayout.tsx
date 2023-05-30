import { useEffect, useRef, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styles from './ModalLayout.module.css'
import { CSSTransition } from 'react-transition-group'
import { ANIMATION_TIME } from '@/hooks/useMount'
import { ModalProps } from '../Modal'
import ModalCloseIcon from '@/icons/ModalCloseIcon'
import OrderFindedItem from '@/components/ui/Common/OrderFindedItem/OrderFindedItem'
import SelectItem from '../../SelectItem'
import CustomInput from '@/components/ui/Common/CustomInput/CustomInput'
import SubmitButton from '@/components/ui/Common/SumbitButton/SubmitButton'
import Header from '@/components/ui/Common/Header/Header'

const overlayAnimations = {
  enter: styles.overlayEnter,
  enterActive: styles.overlayEnterActive,
  exit: styles.overlayExit,
  exitActive: styles.overlayExitActive,
}

const contentAnimations = {
  enter: styles.contentEnter,
  enterActive: styles.contentEnterActive,
  exit: styles.contentExit,
  exitActive: styles.contentExitActive,
}

interface IFormValues {
  fio: string
  email: string
  phone: string
  tg: string
}

const formikInitialValues: IFormValues = {
  fio: '',
  email: '',
  phone: '',
  tg: '',
}
const ModalLayout = ({ onClose, services, type, opened }: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [animationIn, setAnimationIn] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [mailSended, setMailSended] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    }
  }, [])
  useEffect(() => {
    setAnimationIn(opened)
  }, [opened])

  const handleSubmit = async (
    values: any,
    { setErrors, setStatus, setSubmitting }: any
  ) => {
    try {
      // let response = await fetch(
      //   'https://willstar.ru/?page_id=59&email=0@0.ru&service=Продюссирование блоггеров&phone=000000000'
      // )
      // console.log(response)
    } catch (e) {}
    setMailSended(true)
    setTimeout(() => {
      setMailSended(false)
    }, 6000)
    console.log(values)
    console.log('hello')
  }

  return (
    <div className={styles.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimations}
      >
        <div className={styles.overlay} ref={overlayRef}></div>
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimations}
      >
        <div className={styles.content} ref={contentRef}>
          {isMobile && <Header className={styles.header} />}
          <div className={styles.btnClose} onClick={onClose}>
            <ModalCloseIcon />
          </div>
          <h2
            className={[
              styles.title,
              mailSended ? styles.titleSended : '',
            ].join(' ')}
          >
            {mailSended ? 'Спасибо!' : 'Заказать услугу'}
          </h2>
          {!mailSended && (
            <div className={styles.servicesContainer}>
              {type === 'input' &&
                services.map(service => (
                  <OrderFindedItem key={service}>{service}</OrderFindedItem>
                ))}
              {type === 'select' &&
                services.map(service => (
                  <SelectItem key={service} initialActive={true}>
                    {service}
                  </SelectItem>
                ))}
            </div>
          )}
          {!mailSended && (
            <div className={styles.formContainer}>
              <Formik
                initialValues={formikInitialValues}
                validationSchema={Yup.object().shape({
                  fio: Yup.string().required(
                    'Поле обязательно для заполнения*'
                  ),
                  phone: Yup.string().required(
                    'Поле обязательно для заполнения*'
                  ),
                  email: Yup.string()
                    .required('Поле обязательно для заполнения*')
                    .email('Введите корректный email*'),
                })}
                onSubmit={handleSubmit}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                }: any) => (
                  <form
                    className={styles.form}
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.inputInner}>
                      <div className={styles.inputBlock}>
                        <div className={styles.inputWrapper}>
                          <span
                            className={[
                              styles.additionalText,
                              Object.keys(touched).some(t => t === 'fio') &&
                              errors.fio
                                ? styles.formError
                                : '',
                            ].join(' ')}
                          >
                            Ваше имя и отчество*
                          </span>
                          <CustomInput
                            errors={errors.fio}
                            id='fio'
                            touched={touched.fio}
                            onChange={handleChange}
                            value={values.fio}
                          />
                        </div>
                        <div className={styles.inputWrapper}>
                          <span className={[styles.additionalText].join(' ')}>
                            Ник в telegram
                          </span>
                          <CustomInput
                            errors={errors.tg}
                            id='tg'
                            onChange={handleChange}
                            value={values.tg}
                            touched={touched.tg}
                          />
                        </div>
                      </div>

                      <div className={styles.inputBlock}>
                        <div className={styles.inputWrapper}>
                          <span
                            className={[
                              styles.additionalText,
                              Object.keys(touched).some(t => t === 'phone') &&
                              errors.phone
                                ? styles.formError
                                : '',
                            ].join(' ')}
                          >
                            Мобильный телефон*
                          </span>
                          <CustomInput
                            errors={errors.phone}
                            id='phone'
                            touched={touched.phone}
                            onChange={handleChange}
                            value={values.phone}
                          />
                        </div>
                        <div className={styles.inputWrapper}>
                          <span
                            className={[
                              styles.additionalText,
                              Object.keys(touched).some(t => t === 'email') &&
                              errors.email
                                ? styles.formError
                                : '',
                            ].join(' ')}
                          >
                            E-mail*
                          </span>
                          <CustomInput
                            errors={errors.email}
                            id='email'
                            onChange={handleChange}
                            value={values.email}
                            touched={touched.email}
                          />
                        </div>
                      </div>
                    </div>

                    <SubmitButton
                      text={'отправить заявку'}
                      disabled={
                        Object.keys(errors).length !== 0 ||
                        Object.keys(touched).length === 0
                      }
                    />
                  </form>
                )}
              </Formik>
            </div>
          )}
          {mailSended && (
            <div className={styles.successText}>
              {!isMobile && (
                <>
                  Ваша заявка успешно отправлена. <br /> Мы свяжемся с вами в
                  ближайшее время.
                </>
              )}
              {isMobile && (
                <>
                  <p>Ваша заявка успешно отправлена.</p>
                  <p>Мы свяжемся с вами в ближайшее время.</p>
                </>
              )}
            </div>
          )}
        </div>
      </CSSTransition>
    </div>
  )
}

export default ModalLayout
