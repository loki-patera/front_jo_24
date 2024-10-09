import eventsData from "@/app/datas/eventsData"
import EventModalListItem from "./EventModalListItem"
import useEventModal from "@/app/hooks/useEventModal"

export type EventType = {
  id_event: number
  date: string
  hours: string
  location: string
  price: string
}

const EventModalList = () => {

  const eventModal = useEventModal()

  return (

    <ul role="list" className="divide-y divide-bluejo">
      {eventsData(eventModal.id_sport).map((event) => (
        <EventModalListItem
          key={event.id_event}
          event={event}
        />
      ))}
    </ul>
  )
}

export default EventModalList