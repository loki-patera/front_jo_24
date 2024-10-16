import Image from "next/image"
import useEventModal from "@/app/hooks/useEventModal"
import { SportType } from "@/app/types/SportType"

interface SportProps {
  sport: SportType
}

const SportListItem: React.FC<SportProps> = ({
  sport
}) => {

  const eventModal = useEventModal()

  return (

    <li key={sport.id_sport}>
      <div>
        <div className="mb-1">
          <h3 className="text-center text-sm leading-4 text-yellowxdarkjo">
          {sport.title}
          </h3>
        </div>
        <Image
          alt={sport.title}
          src={sport.url_image}
          className="rounded-lg cursor-pointer hover:border hover:border-bluejo p-1"
          width={180}
          height={0}
          onClick={() => {
            eventModal.id_sport = sport.id_sport
            eventModal.label = sport.title
            eventModal.open()
          }}
        />
      </div>
    </li>
  )
}

export default SportListItem