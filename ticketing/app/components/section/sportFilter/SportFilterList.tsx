'use client'

import sportsData from "@/app/datas/sportsData"
import SportSelectedProps from "@/app/interfaces/SportSelectedProps"
import ClassNames from "@/app/utils/ClassNames"
import { Label, Radio, RadioGroup } from "@headlessui/react"
import { useEffect, useState } from "react"

const SportFilterList: React.FC<SportSelectedProps> = ({
  sportSelected,
  setSportSelected
}) => {

  const [selected, setSelected] = useState(sportSelected)

  useEffect(() => {

    setSportSelected(selected)
  }, [selected])

  return (

    <RadioGroup value={selected} onChange={setSelected} className="mt-2">
      <div className="flex flex-wrap justify-center gap-6 p-4 sm:p-6">
        <Radio
          value={0}
          className={({ checked }) =>
            ClassNames(
              checked
                ? 'bg-bluejo text-yellowxlightjo hover:bg-bluedarkjo outline outline-offset-2 outline-yellowjo'
                : 'bg-bluelightjo text-yellowdarkjo hover:outline hover:outline-offset-2 hover:outline-yellowjo',
              'flex items-center justify-center cursor-pointer border rounded-lg shadow-lg p-2 w-32 h-16'
            )
          }
        >
          <Label className="text-center">Tous les sports</Label>
        </Radio>
        {sportsData().map((sport) => (
          <Radio
            key={sport.id_sport}
            value={sport.id_sport}
            className={({ checked }) =>
              ClassNames(
                checked
                  ? 'bg-bluejo text-yellowxlightjo hover:bg-bluedarkjo outline outline-offset-2 outline-yellowjo'
                  : 'bg-bluelightjo text-yellowdarkjo hover:outline hover:outline-offset-2 hover:outline-yellowjo',
                'flex items-center justify-center cursor-pointer border rounded-lg shadow-lg p-2 w-32 h-16'
              )
            }
          >
            <Label className="text-center">{sport.title}</Label>
          </Radio>
        ))}
      </div>
    </RadioGroup>
  )
}

export default SportFilterList