import SportSelectedProps from "@/app/interfaces/SportSelectedProps"
import EventTable from "./EventTable"

const EventSection: React.FC<SportSelectedProps> = ({
  sportSelected,
  setSportSelected
}) => {

  return (

    <section className="mx-auto max-w-7xl py-4 sm:py-4">
      <div className="flex justify-center py-2">
        <h2 className="text-xl font-bold text-bluejo">
          <span className="border-b border-yellowjo pb-1">
            Liste des évènements
          </span>
        </h2>
      </div>
      <EventTable
        sportSelected={sportSelected}
        setSportSelected={setSportSelected}
      />
    </section>
  )
}

export default EventSection