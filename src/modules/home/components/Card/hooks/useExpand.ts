import React, { useCallback, useEffect, useState } from 'react'

const useExpand = (variant: 'edit' | 'default' | 'short') => {
  const [expand, setExpand] = useState(variant !== 'short')

  const handleExpand = useCallback(() => {
    setExpand(true)
  }, [])

  const handleShrink = useCallback(() => {
    setExpand(false)
  }, [])

  useEffect(() => {
    if (variant != 'short') handleExpand()
    else handleShrink()
  }, [handleExpand, handleShrink, variant])

  return { expand, handleExpand, handleShrink }
}

export default useExpand
