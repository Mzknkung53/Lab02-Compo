import axios, { type AxiosResponse } from 'axios'
import type { Event } from '@/type'
import apiClient from './AxiosClient'

export default {
  // Fetch events with pagination
  getEvents(pageLimit: number, page: number): Promise<AxiosResponse<Event[]>> {
    return apiClient.get<Event[]>('/events?_page=' + page + '&_limit=' + pageLimit)
  },

  // Fetch event by ID
  getEventById(id: number): Promise<AxiosResponse<Event>> {
    return apiClient.get<Event>(`/events/${id}`)
  },

  // Save a new event
  saveEvent(event: Event) {
    return apiClient.post('/events', event)
  },

  // Fetch events by keyword (title), with pagination
  getEventsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<Event[]>> {
    return apiClient.get<Event[]>('/events?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
  }
}
