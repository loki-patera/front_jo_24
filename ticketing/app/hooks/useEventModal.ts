import { create } from "zustand"

interface EventModalTool {

  isOpen: boolean
  open: () => void
  close: () => void
  id_sport: number
  label: string
}

const useEventModal = create<EventModalTool>((set) => ({

  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  id_sport: 0,
  label: ''
}))

export default useEventModal