import axios, { type AxiosResponse } from 'axios'
import type { Event } from '@/type'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(pageLimit: number, page: number): Promise<AxiosResponse<Event[]>> {

    return apiClient.get<Event[]>('/events?_page='+page+'&_limit='+pageLimit)
  },

  getEventById(id: number): Promise<AxiosResponse<Event>> {
    return apiClient.get<Event>(`/events/${id}`)
  },
  saveEvent(event: Event){
    return apiClient.post('/events', event)
  }
  }
