import SportSelectedProps from "@/app/interfaces/SportSelectedProps"
import SportFilterList from "./SportFilterList"

const SportFilter: React.FC<SportSelectedProps> = ({
  sportSelected,
  setSportSelected
}) => {

  return (

    <section className="mx-auto max-w-7xl py-4 sm:py-4">
      <div className="flex justify-center py-2">
        <h2 className="text-xl font-bold text-bluejo">
          <span className="border-b border-yellowjo pb-1">
            Sélectionner une épreuve sportive
          </span>
        </h2>
      </div>
      <SportFilterList
        sportSelected={sportSelected}
        setSportSelected={setSportSelected}
      />
    </section>
  )
}

export default SportFilter