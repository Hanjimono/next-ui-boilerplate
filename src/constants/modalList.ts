import AlertModal from "@/modals/Helpers/Alert"

/** List of all modals */
export const MODAL_LIST = {
  alert: AlertModal
}

/** All available modals names */
export type ModalName = keyof typeof MODAL_LIST
