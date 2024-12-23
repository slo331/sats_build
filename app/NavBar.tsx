import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import NewsTicker from './components/NewsTicker'
import UserBtn from './UserBtn'

const NavBar = () => {
  return (
    <nav className='sticky top-0 w-full z-10'>
      <div className='navbar-wrap px-7 py-4 flex items-center justify-between dark:bg-slate-800 bg-gray-200'>
        <HamburgerMenu />
        <UserBtn />
      </div>
      <div className='navbar-ticker-wrap block'>
        <NewsTicker />
      </div>
    </nav>
  )
}

export default NavBar