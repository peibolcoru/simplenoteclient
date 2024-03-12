import React from 'react'
import './NoteMain.css'

export const NoteMain = ({note}) => {
  return (
    <div className='text'>
      <div className='inner-text'>
         {note.text}
      </div>
     
    </div>
  )
}
