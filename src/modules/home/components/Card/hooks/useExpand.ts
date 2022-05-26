import React, { useCallback, useState } from 'react'

const useExpand = (variant: 'edit' | 'default' | 'short') => {
  const [expand, setExpand] = useState(variant !== 'short')

  const handleExpand = useCallback(() => {
    setExpand(true)
  }, [])

  const handleShrink = useCallback(() => {
    setExpand(false)
  }, [])

  return { expand, handleExpand, handleShrink }
}

export default useExpand
