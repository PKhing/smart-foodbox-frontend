import React, { useCallback, useState } from 'react'

const useEdit = () => {
  const [value, setValue] = useState('')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value)
    },
    []
  )

  const handleSave = useCallback(() => {
    // TODO
  }, [])

  const handleDelete = useCallback(() => {
    // TODO
  }, [])

  return { value, handleChange, handleSave, handleDelete }
}

export default useEdit
