import React from 'react'

import './FilterBy.css'
import TitleFilter from './NameFilter/TitleFilter'
import { DateFilter } from './DateFilter/DateFilter'
import { PriorityFilter } from './PriorityFilter/PriorityFilter'

const FilterBy = ({setAllNotes}) => {
  return (
    <div className='filter-by-container'>
        <p id='filterBy'>Filter by:</p> 
        <TitleFilter setAllNotes={setAllNotes}/>
        <DateFilter setAllNotes={setAllNotes}/>
        <PriorityFilter setAllNotes={setAllNotes}/>
    </div>
  )
}

export default FilterBy