import { useEffect, useState } from "react"
const { apiService } = require("../services/apiService")
import { SportType } from "../components/section/sportSection/SportList"

const sportsData = () => {

  const [sports, setSports] = useState<SportType[]>([])

  const getSports = async () => {

    const tempSports = await apiService.get('/api/event/sports')
    setSports(tempSports.data)
  }

  useEffect(() => {

    getSports()
  }, [])

  return sports
}

export default sportsData