export interface CardProps {
  time: Date
  weight: number
  note?: string
  variant?: 'edit' | 'default' | 'short'
}
