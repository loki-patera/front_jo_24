'use client'

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import React, { useCallback, useEffect, useState } from "react"
import ModalButton from "./ModalButton"
import { useRouter } from "next/navigation"
import useEventModal from "@/app/hooks/useEventModal"

interface ModalProps {
  isOpen: boolean
  close: () => void
  label?: string
  content: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  close,
  label,
  content
}) => {

  const [showModal, setShowModal] = useState(isOpen)
  const router = useRouter()
  const eventModal = useEventModal()

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setShowModal(false)
    setTimeout(() => {
      close()
    }, 300)
  }, [close])

  if(!isOpen) {
    return null
  }

  const submitBooking = () => {

    eventModal.close()
    router.push(`/pages/booking`)
  }

  return (

    <Dialog open={showModal} onClose={setShowModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0
          data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all
              data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200
              data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0
              data-[closed]:sm:scale-95"
          >
            <header className="flex items-center p-5 justify-center relative bg-yellowlightjo border-b">
              <h2 className="text-2xl text-bluedarkjo font-bold border-b border-yellowdarkjo">
                {label}
              </h2>
            </header>

            <section className="bg-yellowxlightjo py-2 px-5">
              {content}
            </section>

            <footer className="bg-yellowxlightjo px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <form action={submitBooking}>
                <ModalButton
                  label="Réserver"
                  onClick={submitBooking}
                  className="bg-bluejo text-yellowxlightjo hover:bg-bluedarkjo sm:ml-3"
                />
              </form>
              <ModalButton
                label="Annuler"
                onClick={handleClose}
                className="bg-yellowlightjo text-bluedarkjo hover:bg-yellowjo mt-2 sm:mt-0"
              />
            </footer>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal