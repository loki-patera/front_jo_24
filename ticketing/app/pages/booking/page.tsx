'use client'

import EventSection from "@/app/components/section/eventSection/EventSection"
import SportFilter from "@/app/components/section/sportFilter/SportFilter"
import useEventModal from "@/app/hooks/useEventModal"
import { useState } from "react"

const BookingPage = () => {

  const evenModal = useEventModal()
  const [sportSelected, setSportSelected] = useState(evenModal.id_sport)

  return (

    <main>
      <SportFilter
        sportSelected={sportSelected}
        setSportSelected={setSportSelected}
      />
      <EventSection
        sportSelected={sportSelected}
        setSportSelected={setSportSelected}
      />
    </main>
  )
}

export default BookingPage