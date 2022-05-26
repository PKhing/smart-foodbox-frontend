import { Food } from 'common/types/food'

export interface CardProps extends Food {
  variant?: 'edit' | 'default' | 'short'
}
