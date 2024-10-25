'use client'

import { DropdownMenu } from '@radix-ui/themes'
import React from 'react'
import { LuUser2 } from 'react-icons/lu'
import ThemeSwitch from './ThemeSwitch'
import { MdLogout } from 'react-icons/md'
import Link from 'next/link'

const UserBtn = () => {
  return (
    <div className='flex items-center'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className='dark:bg-white bg-slate-700 rounded-full p-2' title='Stephen Orioste'>
            <LuUser2 className='dark:text-slate-800 text-white text-2xl font-bold' />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className='pb-1'>
          <div className='userProfile pb-2'>
            <div className='flex items-center p-2 pb-0'>
              <div className='dark:bg-white bg-slate-700 rounded-full p-2 mr-4'>
                <LuUser2 className='dark:text-slate-800 text-white text-3xl font-bold' />
              </div>
              <div className='userDetails'>
                <span className='block font-medium text-base/[22px] mb-0'>Stephen Orioste</span>
                <Link href='mailto:stephen.orioste@email.com' className='block text-sm/[12px] transition-colors hover:ease-in-out hover:text-amber-500'>stephen.orioste@email.com</Link>
              </div>
            </div>
          </div>
          <DropdownMenu.Separator />
          <div className='themeSwitch flex items-center justify-between px-5 py-1'>
            <label className='label text-base' htmlFor='themes-mode'>
              Dark mode
            </label>
            <ThemeSwitch />
          </div>
          <DropdownMenu.Separator />
          <DropdownMenu.Item color='red'>
            <div className='themeSwitch flex items-center justify-between px-2 py-2'>
              <button className='flex items-center text-base'>
                <MdLogout className='mr-2 text-xl font-bold'/>
                Logout
              </button>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default UserBtn