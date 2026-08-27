import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
 const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )//by default the theme is light and we will pass this state as props into navabar component
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      
    </div>
  )
}

export default App
