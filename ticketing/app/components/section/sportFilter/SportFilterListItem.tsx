import { SportType } from "@/app/types/SportType"
import { useEffect } from "react"

interface SportProps {
  sport: SportType
}

const SportFilterListItem: React.FC<SportProps> = ({
  sport
}) => {

  const id_sport = sessionStorage.getItem('data')

  useEffect(() => {
    if (id_sport) {
      const selectedButton = document.getElementById(id_sport)
      if (selectedButton) {
        selectedButton.focus()
      }
    }
    sessionStorage.removeItem('data')
  }, [])

  return (

    <li key={sport.id_sport}>
      <button
        id={String(sport.id_sport)}
        className="bg-bluelightjo text-yellowdarkjo rounded-lg shadow-lg p-2 w-32 h-16 hover:outline
          hover:outline-offset-2 hover:outline-yellowjo focus:outline focus:outline-offset-2 focus:outline-yellowjo
          focus:bg-bluejo focus:text-yellowxlightjo"
      >
        {sport.title}
      </button>
    </li>
  )
}

export default SportFilterListItem