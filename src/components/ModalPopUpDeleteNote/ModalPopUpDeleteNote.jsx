import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import useSaveNote from '../../Hooks/useSaveNote';
import { useNotes } from '../../Hooks/useNotes';


import { useEffect, useState } from 'react';

import React from 'react';

const ModalPopUpDeleteNote = ({ noteId, handleClose }) => {
  const [openDelete, setOpenDelete] = useState(false);
  
  const {handleDeleteNote} = useSaveNote();
  const {allNotes,deleteNote,setSearchParams} = useNotes();
 
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  
  const handleSubmitDeleteNote = async (noteId) =>{
      await handleDeleteNote(noteId);
      const data = await deleteNote(noteId);
      console.log(data)
      setSearchParams(new URLSearchParams());
     
      handleClose();
  }

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpenDelete} color='normal2'>
        <DeleteForeverIcon id='delete-button' />
      </IconButton>
      
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        PaperProps={{
          style: {
            opacity: '0.9',
            borderRadius: '10px',
            backgroundColor: '#598392',
            border: '1px solid black',
            color: 'white',
            boxShadow:
              '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
          },
        }}
      >
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure you want to delete this note?'}
        </DialogTitle>
        <DialogActions>
          <Button variant='outlined' onClick={handleCloseDelete}>Cancel</Button>
          <Button variant='outlined' color='warning' onClick={()=>{handleSubmitDeleteNote(noteId)}} autoFocus>
            delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default ModalPopUpDeleteNote;
