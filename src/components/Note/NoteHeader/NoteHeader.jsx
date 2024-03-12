import React from 'react'
import './NoteHeader.css';

export const NoteHeader = ({note}) => {
  return (
    <div className='noteHeader'>
      {note.title}
    </div>
  )
}
