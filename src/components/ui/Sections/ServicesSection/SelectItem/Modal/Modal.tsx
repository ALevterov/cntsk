import styles from './Modal.module.css'
import useMount from '@/hooks/useMount'
import ModalLayout from './ModalLayout/ModalLayout'
import Portal from '@/components/Portal/Portal'
export interface ModalProps {
  opened: boolean
  onClose: () => void
  services: string[]
  type: 'input' | 'select'
}

const Modal = ({ opened, onClose, services, type }: ModalProps) => {
  const { mounted } = useMount({ opened })

  if (!mounted) {
    return null
  }
  return (
    <Portal>
      <ModalLayout onClose={onClose} services={services} type={type} opened />
    </Portal>
  )
}

export default Modal
