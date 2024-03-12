import React, { useState } from 'react';

import './DateFilter.css';

import { useNotes } from '../../../../Hooks/useNotes';
import { Link } from 'react-router-dom';

export const DateFilter = ({ setAllNotes }) => {
  
    const { allNotes } = useNotes();
  const [invert,setInvert] = useState(false)

  const handleDateFilter = ()=>{
    const orderBydateNotes = [...allNotes].sort((a,b)=>a.createdAt-b.createdAt)
    if(!invert) {
        setAllNotes(orderBydateNotes)
        setInvert(true)
    } else{
        setAllNotes(orderBydateNotes.reverse())
        setInvert(false)
    }
}

  return (
    <div className='filter date-filter'>
      <p onClick={handleDateFilter}>Date</p>
    </div>
  );
};
