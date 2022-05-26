import { useCallback, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }, [theme])

  return { theme, toggleTheme }
}

export default useTheme
