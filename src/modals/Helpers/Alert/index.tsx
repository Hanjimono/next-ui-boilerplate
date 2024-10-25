// System
import clsx from "clsx"
// Ui
import Modal from "@/ui/Navigation/Modal"
// Styles and types
import { AlertModalProps } from "./types"
import styles from "./styles.module.scss"

function AlertModal({ className, text, title, onClose }: AlertModalProps) {
  const calculatedClassNames = clsx(styles["alert-modal"], className)
  return (
    <Modal title={title} onClose={onClose} className={calculatedClassNames}>
      {text}
    </Modal>
  )
}
export default AlertModal
