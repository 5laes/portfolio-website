import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'
import Links from './pages/links.jsx'
import Projects from './pages/projects.jsx'
import Socials from './pages/socials.jsx'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  },[theme])

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='Home' element={<Home />} />
        <Route path='Links' element={<Links />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='Socials' element={<Socials />} />
      </Routes>
      </div>
    </>
  )
}

{/* <div className={`container ${theme}`}>
  <Navbar theme={theme} setTheme={setTheme} />
</div> */}

{/* <div className={`container ${theme}`}>
<Routes>
  <Route path='/' element={<Navbar theme={theme} setTheme={setTheme} />}>
    <Route path='Home' element={<Home />} />
    <Route path='Links' element={<Links />} />
    <Route path='Projects' element={<Projects />} />
    <Route path='Socials' element={<Socials />} />
  </Route>
</Routes>
</div> */}

export default App