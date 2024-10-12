import { EventType } from "@/app/types/EventType"

interface EventProps {
  event: EventType
}

const EventModalListItem: React.FC<EventProps> = ({
  event
}) => {

  return (

    <li key={event.id_event} className="flex justify-between gap-x-3 py-5">
      <div className="flex min-w-0 gap-x-2">
        <div className="min-w-0 flex-auto">
          <p className="text-base font-semibold leading-6 text-yellowdarkjo">{event.date}</p>
          <p className="mt-1 text-sm leading-5 text-bluejo">{event.location}</p>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-end">
        <p className="text-sm font-semibold leading-6 text-yellowdarkjo">{event.hours}</p>
        <p className="mt-1 text-sm leading-5 text-bluejo">
          {event.price} €/pers
        </p>
      </div>
    </li>
  )
}

export default EventModalListItem