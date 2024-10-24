import { Select } from '@radix-ui/themes'
import React from 'react'

const FilterHour = () => {
  return (
    <div className='flex flex-col w-full md:w-1/2'>
      <Select.Root size={'3'}>
        <Select.Trigger placeholder='Filter by Hours' />
        <Select.Content>
          <Select.Item value='hourOpt1'>Next 1 hour</Select.Item>
          <Select.Item value='hourOpt2'>Next 2 hours</Select.Item>
          <Select.Item value='hourOpt3'>Next 3 hours</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  )
}

export default FilterHour