import React, { useState } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default DarkModeToggle
