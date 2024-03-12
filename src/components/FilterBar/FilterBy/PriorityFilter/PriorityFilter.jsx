import React, { useState } from 'react'

import './PriorityFilter.css'

import {useNotes} from '../../../../Hooks/useNotes'

export const PriorityFilter = ({setAllNotes}) => {

    const {allNotes} = useNotes();
    const [invert,setInvert] = useState(false)

    const handlePriorityFilter = ()=>{
        const orderByPriorityNotes = [...allNotes].sort((a,b)=>a.labelId-b.labelId)
        if(!invert) {
            setAllNotes(orderByPriorityNotes)
            setInvert(true)
        } else{
            setAllNotes(orderByPriorityNotes.reverse())
            setInvert(false)
        }
    }

  return (
    <div className='filter priority-filter'>
        <p onClick={handlePriorityFilter}>Priority</p>
    </div>
  )
}
