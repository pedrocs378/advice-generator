import { Moon, Sun } from 'lucide-react'

import { Button } from '../ui/button'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  function handleThemeToggle() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      size="icon"
      className="absolute top-4 right-4"
      variant="outline"
      onClick={handleThemeToggle}
    >
      {theme === 'dark' && <Sun className="h-4 w-4" />}
      {theme === 'light' && <Moon className="h-4 w-4" />}
    </Button>
  )
}
