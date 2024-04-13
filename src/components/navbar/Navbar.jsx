import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = ({ theme, setTheme }) => {
    
    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <div className='navbar'>
            <FontAwesomeIcon icon={faUser} size="2xl" style={theme == "light" ? {color: "#000000"} : {color: "#ffffff"}} className='logo'/>
            <ul>
                <li><Link to={'Home'}>Home</Link></li>
                <li><Link to={'Socials'}>Socials</Link></li>
                <li><Link to={'Projects'}>Projects</Link></li>
                <li><Link to={'Links'}>Links</Link></li>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='Search' />
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={theme == "light" ? {color: "#ffffff"} : {color: "#000000"}} className='search-icon'/>
            </div>
            <FontAwesomeIcon onClick={()=>{toggle_mode()}} icon={theme == "light" ? faMoon : faSun} size="2xl" style={theme == "light" ? {color: "#000000"} : {color: "#ffffff"}} className='toggle-icon'/>
        </div>
    )
}

export default Navbar