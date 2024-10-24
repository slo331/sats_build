import React from 'react'
import FilterHour from './FilterHour'
import FilterItem from './FilterItem'
import FilterSearch from './FilterSearch'

const Filters = () => {
  return (
    <div className='py-5'>
      <div className='block space-y-3 md:flex md:items-center md:justify-between md:space-y-0'>
        <div className='filter-wrap w-full block space-y-3 md:flex md:items-center md:justify-start md:space-x-4 md:space-y-0 md:w-1/2 lg:w-1/3'>
          <FilterHour />
          <FilterItem />
        </div>
        <div className='filter-wrap w-full block space-y-3 md:flex md:items-center md:justify-end md:space-x-4 md:space-y-0 md:w-1/2 lg:w-1/3'>
          <FilterSearch />
        </div>
      </div>
    </div>
  )
}

export default Filters