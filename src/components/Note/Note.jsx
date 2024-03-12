import React from 'react'
import { NoteHeader } from './NoteHeader/NoteHeader'
import { NoteMain } from './NoteMain/NoteMain'
import { NoteFooter } from './NoteFooter/NoteFooter'

import('./Note.css')
export const Note = ({note,onClick,status}) => {

  return (
      <div className={`note-container scale-up-center ${status}`} onClick={onClick}>
        <NoteHeader note={note} status={status}/>
        
        <NoteMain note={note} status={status}/>
        
        <NoteFooter note={note} status={status}/>
      </div>

  )  
}
