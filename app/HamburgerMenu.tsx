'use client';

import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = () => {
  return (
    <div className='flex items-center'>
      <button>
        <GiHamburgerMenu className='dark:text-white text-slate-800 text-2xl mr-3 md:mr-6'/>
      </button>
      <span className='dark:text-white text-slate-800 text-xl md:text-xl font-medium'>Web Application</span>
    </div>
  )
}

export default HamburgerMenu