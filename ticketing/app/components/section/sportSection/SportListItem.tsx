import Image from "next/image"
import { SportType } from "./SportList"

interface SportProps {
  sport: SportType
}

const SportListItem: React.FC<SportProps> = ({
  sport
}) => {

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
          className="rounded-lg hover:border hover:border-bluejo p-1"
          width={180}
          height={0}
          style={{ cursor: 'pointer'}}
        />
      </div>
    </li>
  )
}

export default SportListItem