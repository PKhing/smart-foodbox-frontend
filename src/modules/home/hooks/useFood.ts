import { Food, GetFoodResponse } from 'common/types/food'
import moment from 'moment'
import { collection, onSnapshot, query, Unsubscribe } from 'firebase/firestore'
import { db } from 'config/firebase'
import { useEffect, useRef, useState } from 'react'

const useFood = () => {
  const [newFood, setNewFood] = useState<Food[]>([])
  const [history, setNewHistory] = useState<Food[]>([])

  let unsubscribe = useRef<Unsubscribe>()

  useEffect(() => {
    const q = query(collection(db, 'foodlist'))
    unsubscribe.current = onSnapshot(q, (querySnapshot) => {
      const tmpNewFood: Food[] = []
      const tmpHistory: Food[] = []
      querySnapshot.forEach((doc) => {
        const { confirm, timeCreated, ...data } = doc.data() as GetFoodResponse
        const food = {
          id: doc.id,
          timeCreated: timeCreated.toDate(),
          ...data,
        }
        if (confirm) tmpHistory.push(food)
        else tmpNewFood.push(food)
      })
      setNewFood([...tmpNewFood])
      setNewHistory([...tmpHistory])
    })
    return () => {
      if (unsubscribe.current) unsubscribe.current()
    }
  }, [])
  return { newFood, history }
}

export default useFood
