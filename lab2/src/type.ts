export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
}

export interface Organizer {
  id: number;
  name: string;  
  organizationName: string;
  address: string;
}
export interface Student {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: number
  image: string
  description: string
}
export interface MessageState {
  message: string
}

export interface EventState {
  event: Event | null
}

export interface Organizer {
  id: number
  organizationName: string
  address: string
}

export interface OrganizerState {
  organizer: Organizer | null
}