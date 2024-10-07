'use client'

import sportsData from "@/app/datas/sportsData"
import SportListItem from "./SportListItem"

export type SportType = {
  id_sport: number
  title: string
  url_image: string
}

const SportList = () => {

  return (

    <ul
      role="list"
      className="grid gap-x-8 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-y-16 xl:col-span-2"
    >
      {sportsData().map((sport) => (
        <SportListItem
          key={sport.id_sport}
          sport={sport}
        />
      ))}
    </ul>
  )
}

export default SportList