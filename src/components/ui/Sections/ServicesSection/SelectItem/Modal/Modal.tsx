import useMount from '@/hooks/useMount'
import ModalLayout from './ModalLayout/ModalLayout'
import Portal from '@/components/Portal/Portal'
export interface ModalProps {
  opened: boolean
  onClose: () => void
  services: string[]
  type: 'input' | 'select'
  onSubmit: () => void
}

const Modal = ({ opened, onClose, services, type, onSubmit }: ModalProps) => {
  const { mounted } = useMount({ opened })

  if (!mounted) {
    return null
  }
  return (
    <Portal>
      <ModalLayout
        onSubmit={onSubmit}
        onClose={onClose}
        services={services}
        type={type}
        opened
      />
    </Portal>
  )
}

export default Modal
