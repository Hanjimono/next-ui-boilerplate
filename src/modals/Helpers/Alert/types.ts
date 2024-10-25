import { DefaultModalProps } from "@/constants/types/modals"

export interface AlertModalProps extends DefaultModalProps {
  type: "alert"
  /** Classes */
  className?: string
  text?: string
}
