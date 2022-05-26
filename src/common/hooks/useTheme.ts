import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme((localStorage.getItem('theme') as Theme) || 'light')
    }
  }, [])

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }, [theme])

  return { theme, toggleTheme }
}

export default useTheme
