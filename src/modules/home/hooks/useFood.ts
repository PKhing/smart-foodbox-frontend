import { Food } from 'common/types/food'

const newFood: Food[] | null = [
  {
    id: '1',
    time: new Date(),
    weight: 200,
  },
  {
    id: '2',
    time: new Date(),
    weight: 300,
  },
]

const history: Food[] | null = [
  {
    id: '1',
    time: new Date(),
    weight: 200,
    note: 'ทำไม genshin เกลือจังครับ',
  },
  {
    id: '2',
    time: new Date(),
    weight: 300,
    note: 'ทำไม genshin เกลือจังครับ',
  },
]
const useFood = () => {
  // TODO
  return { newFood, history }
}

export default useFood
