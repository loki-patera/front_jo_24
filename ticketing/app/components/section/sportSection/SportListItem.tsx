import Image from "next/image"
import { SportType } from "./SportList"
import useEventModal from "@/app/hooks/useEventModal"

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
          <h3 className="text-center font-semibold leading-7 tracking-tight text-yellowdarkjo">
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