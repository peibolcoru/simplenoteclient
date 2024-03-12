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


import {useContext, useState } from 'react';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteWallService, getWallService } from '../../services/wallService';
import { WallsContext } from '../../contexts/WallsContext';

import './ModalPopUpDeleteWall.css'

const ModalPopUpDeleteNote = ({ wallId}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const {setWalls} = useContext(WallsContext)

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const navigate = useNavigate();

  const handleDeleteWall = async (id) => {
    try {
      await deleteWallService(id);

      const updatedWalls = await getWallService();
      setWalls(updatedWalls.data);
    } catch {
      setWalls('');
      console.error('No quedan muros');
    } finally {
      navigate('/');
    }
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpenDelete} color='white'>
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
          {'Are you sure you want to delete this wall?'}
        </DialogTitle>
        <DialogActions>
          <Button variant='outlined' onClick={handleCloseDelete}>Cancel</Button>
          <Button variant='outlined' color='warning' onClick={()=>{handleDeleteWall(wallId)}} autoFocus>
            delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default ModalPopUpDeleteNote;
