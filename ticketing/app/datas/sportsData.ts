import { useEffect, useState } from "react"
import { SportType } from "../types/SportType"
const { apiService } = require("../services/apiService")

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