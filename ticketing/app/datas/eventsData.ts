import { useEffect, useState } from "react"
import { EventType } from "../types/EventType"
const { apiService } = require("../services/apiService")

const eventsData = (param: string) => {

  const [events, setEvents] = useState<EventType[]>([])

  const getEvents = async () => {

    const tempEvents = await apiService.get(`/api/event/events?sport=${param}`)
    setEvents(tempEvents.data)
  }

  useEffect(() => {

    getEvents()
  }, [])

  return events
}

export default eventsData