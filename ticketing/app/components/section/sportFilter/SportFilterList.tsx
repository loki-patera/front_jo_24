'use client'

import sportsData from "@/app/datas/sportsData"
import SportFilterListItem from "./SportFilterListItem"

const SportFilterList = () => {

  return (

    <ul role="list" className="flex flex-wrap justify-center gap-4 p-4 sm:p-6">
      {sportsData().map((sport) => (
        <SportFilterListItem
          key={sport.id_sport}
          sport={sport}
        />
      ))}
    </ul>
  )
}

export default SportFilterList