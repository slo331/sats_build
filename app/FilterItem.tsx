import { Select } from '@radix-ui/themes'
import React from 'react'

const FilterItem = () => {
  return (
    <div className='flex flex-col w-full md:w-1/2'>
      <Select.Root size={'3'}>
        <Select.Trigger placeholder='Filter by Items' />
        <Select.Content>
          <Select.Item value='all'>All items</Select.Item>
          <Select.Item value='OPP'>OPP</Select.Item>
          <Select.Item value='BTR'>BTR</Select.Item>
          <Select.Item value='NXY'>NXY</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  )
}

export default FilterItem