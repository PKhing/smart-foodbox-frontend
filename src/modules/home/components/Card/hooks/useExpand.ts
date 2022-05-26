import { useCallback, useState } from 'react'

const useExpand = (variant?: 'default' | 'edit') => {
  const [expand, setExpand] = useState(variant === 'edit')

  const handleExpand = useCallback(() => {
    setExpand(true)
  }, [])

  const handleShrink = useCallback(() => {
    setExpand(false)
  }, [])

  return { expand, handleExpand, handleShrink }
}

export default useExpand
