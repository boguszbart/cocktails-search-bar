import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../logo.svg'

const MainNavigation = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to=''>
          <img className='logo' src={logo} alt='' />
        </Link>
        <div className='nav-links'>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : undefined)}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default MainNavigation
