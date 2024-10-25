// System
import { create } from "zustand"
// Store
import { createModalStore, ModalState } from "@/store/modal/modalSlice"

export const useStore = create<ModalState>()((...a) => ({
  ...createModalStore(...a)
}))
