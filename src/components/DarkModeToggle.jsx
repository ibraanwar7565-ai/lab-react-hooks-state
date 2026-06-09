import React, { useState } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <button
      aria-label={darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default DarkModeToggle
