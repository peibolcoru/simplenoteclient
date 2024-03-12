import React from 'react';
import './NoteFooter.css';

export const NoteFooter = ({ note }) => {
  const dateCreated = new Date(note.createdAt);
  const formatDate = dateCreated.toLocaleString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className='footer-container'>
      <p className='element date'>{formatDate}</p>
      <p className='element labelName'>{note.labelName}</p>
    </div>
  );
};
