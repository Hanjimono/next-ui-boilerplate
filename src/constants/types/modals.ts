import { AlertModalProps } from "@/modals/Helpers/Alert/types"
import { ModalName } from "@/constants/modalList"

/**
 * Props that can be used in any modal but will be passed to the wrapper component
 */
export interface DefaultModalContainerProps {
  withoutMask?: boolean
  onClose?: () => void
  isNotClosable?: boolean
}

/**
 * Props that can be used in any modal
 */
export interface DefaultModalProps {
  type: ModalName
  onClose: () => void
  title?: string
}

/**
 * Props passed to modal store. It's slightly different from the props that are passed to the modal component.
 * It doesn't have onClose and type props, because they are passed by Modal Container and not necessary to be passed to the store by user.
 */
type ModalPropsForStore<T extends DefaultModalProps> = Omit<
  T,
  "onClose" | "type"
>

/**
 * Interface that maps modal names to their props
 */
export interface ModalStoreInterfaceMap {
  alert: DefaultModalContainerProps & ModalPropsForStore<AlertModalProps>
}
