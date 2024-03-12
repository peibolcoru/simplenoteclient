import React, { useEffect, useState } from 'react';

import './SatusWindow.css';
import ModalPopUpNewNote from '../ModalPopUpNewNote/ModalPopUpNewNote';
import {MenuDisplay} from '../MenuDisplay/MenuDisplay';

export const StatusWindow = ({allNotes, status }) => {
  const[display,setDisplay]=useState("open");
  const [animation,setAnimation]= useState("");
  
  const notes = [...allNotes];
  const filterNotes = notes?.filter((note) => note.status === status);

  useEffect(()=>{ if(filterNotes.length===0) {setDisplay('close')} else{setDisplay(``)}},[allNotes])
 
  return (
    <div className={`status-container ${status}`}>
      <h2 className='status-title'>{status}</h2>
      { filterNotes.length===0 && <h5 className="emptyTitle">(empty)</h5>   }
      <div className={`allNotes-container `+(display===`close`?'close':'')}>
        {filterNotes?.map((note) => (
          <div key={note.id}>
            <ModalPopUpNewNote edit={true} note={note} status={status}/>
            
          </div>
        ))}
      
      </div>  <MenuDisplay display={display} setDisplay={setDisplay}/>
    </div>
  );
};
