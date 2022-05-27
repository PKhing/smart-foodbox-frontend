import { apiClient } from 'config/axiosInstance'
import React, { useCallback, useState } from 'react'

const useEdit = (id: string) => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value.slice(0, 200))
    },
    []
  )

  const handleSave = useCallback(() => {
    try {
      setLoading(true)
      apiClient.post(`/post/${id}`, { note: value })
    } catch (e) {
      console.log(e)
    }
  }, [id, value])

  const handleDelete = useCallback(() => {
    try {
      setLoading(true)
      apiClient.delete(`/post/${id}`)
    } catch (e) {
      console.log(e)
    }
  }, [id])

  return { value, handleChange, handleSave, handleDelete, loading }
}

export default useEdit
