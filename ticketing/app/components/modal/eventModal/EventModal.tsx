'use client'

import useEventModal from "@/app/hooks/useEventModal"
import Modal from "../Modal"
import EventModalList from "./EventModalList"

const EventModal = () => {

  const eventModal = useEventModal()

  const content = (
    <EventModalList />
  )

  return(

    <Modal
      isOpen={eventModal.isOpen}
      close={eventModal.close}
      content={content}
      label={eventModal.label}
    />
  )
}

export default EventModal