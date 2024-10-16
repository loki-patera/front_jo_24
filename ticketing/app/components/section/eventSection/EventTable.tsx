'use client'

import eventsData from "@/app/datas/eventsData"
import SportSelectedProps from "@/app/interfaces/SportSelectedProps"
import ClassNames from "@/app/utils/ClassNames"

const EventTable: React.FC<SportSelectedProps> = ({
  sportSelected
}) => {

  let id = ''
  let eventsBySport

  if (sportSelected > 0) {
    
    id = String(sportSelected)

    eventsBySport = eventsData('').filter(event => event.sport === sportSelected)
  }
  else {
    eventsBySport = eventsData('')
  }

  return (

    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y-2 divide-yellowjo">
          <thead className="bg-bluejo">
            <tr>
              <th scope="col" className="py-3.5 px-3 font-semibold text-yellowxlightjo">
                Sport
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 font-semibold text-yellowxlightjo lg:table-cell"
              >
                Lieu
              </th>
              <th scope="col" className="py-3.5 px-3 font-semibold text-yellowxlightjo">
                Date
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 font-semibold text-yellowxlightjo sm:table-cell"
              >
                Horaires
              </th>
              <th scope="col" className="px-3 py-3.5 font-semibold text-yellowxlightjo">
                Prix
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-yellowxlightjo bg-bluexlightjo text-center">
            {eventsBySport.map((event, eventIdx) => (
              <tr
                key={event.id_event}
                className={
                  eventIdx % 2 === 0
                  ? 'cursor-pointer hover:bg-yellowlightjo'
                  : 'cursor-pointer hover:bg-yellowlightjo bg-bluelightjo'
                }
                // "cursor-pointer hover:bg-yellowlightjo"
              >

                <td className="py-4 px-3 font-medium text-bluexdarkjo w-min-24">
                  {event.sport_title}
                  <dl className="font-normal lg:hidden w-max-24">
                    <dt className="sr-only lg:hidden">Lieu</dt>
                    <dd className="mt-1 truncate text-sm text-bluejo lg:hidden whitespace-normal">
                      {event.location}
                    </dd>
                  </dl>
                </td>

                <td className="hidden px-3 py-4 text-sm text-bluejo lg:table-cell">
                  {event.location}
                </td>

                <td className="py-4 px-3 text-sm font-medium text-bluexdarkjo">
                  {event.date}
                  <dl className="font-normal sm:hidden">
                    <dt className="sr-only sm:hidden">Horaires</dt>
                    <dd className="mt-1 truncate text-bluejo sm:hidden">{event.hours}</dd>
                  </dl>
                </td>

                <td className="hidden px-3 py-4 text-sm text-bluejo sm:table-cell whitespace-nowrap">
                  {event.hours}
                </td>

                <td className="px-3 py-4 text-sm text-yellowdarkjo whitespace-nowrap">
                  {event.price} €/pers
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EventTable