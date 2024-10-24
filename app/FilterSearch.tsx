import { TextField } from '@radix-ui/themes'
import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const FilterSearch = () => {
  return (
    <div className='flex flex-col w-full md:w-1/2'>
      <TextField.Root placeholder='Search' size={'3'}>
        <TextField.Slot>
          <FaMagnifyingGlass />
        </TextField.Slot>
      </TextField.Root>
    </div>
  )
}

export default FilterSearch