import { Timestamp } from 'firebase/firestore'

export interface Food {
  img: string
  id: string
  timeCreated: Date
  weight: number
  note: string
}

export interface GetFoodResponse {
  img: string
  timeCreated: Timestamp
  note: string
  weight: number
  confirm: boolean
}
