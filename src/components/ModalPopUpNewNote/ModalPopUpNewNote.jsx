import React, { useState } from 'react';

import './ModalPopUpNewNote.css';

import ModalPopUpDeleteNote from '../ModalPopUpDeleteNote/ModalPopUpDeleteNote';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

import CancelIcon from '@mui/icons-material/Cancel';
import {
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import { useLabels } from '../../Hooks/useLabels';
import { useParams } from 'react-router-dom';

import useSaveNote from '../../Hooks/useSaveNote';
import { useNotes } from '../../Hooks/useNotes';
import { Note } from '../Note/Note';
export const ModalPopUpNewNote = ({ setAllNotes, edit, note, status }) => {
  //variables de formulario
  const [title, setTitle] = useState('');
  const [text, setText] = useState(``);
  const [stat, setStat] = useState('pending');
  const [priority, setPriority] = useState(3);
  const [error, setError] = useState('');

  //control del modal
  const [open, setOpen] = useState(false);
  const [loading,setLoading]= useState(false);

  const { labels } = useLabels();

  const params = useParams();
  const wallId = params.id;

  const { setSearchParams } = useNotes();
  const { handleSaveNote, handleEditNote } = useSaveNote();

  const handleClickOpen = () => {
    if (edit) {
      setTitle(note.title);
      setText(note.text);
      setStat(note.status);
      setPriority(note.labelId);
      setOpen(true);
    } else {
      setTitle(``);
      setText(``);
      setStat(`pending`);
      setPriority(3);
      setError('');
      setOpen(true);
    }
  };

  const handleClose = () => {
    setTitle('');
    setText('');
    setStat('pending');
    setPriority(3);
    setError('');
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true)
      edit
        ? await handleEditNote(note.id, title, text, stat, priority, wallId)
        : await handleSaveNote(title, text, stat, priority, wallId);

      setSearchParams(new URLSearchParams());
      setOpen(false);
    } catch (err) {
      setError(err);
    }
    setLoading(false)
  };

  return (
    <React.Fragment>
      {!edit ? (
        <Button
          id='create-note-button'
          variant='outlined'
          onClick={handleClickOpen}
          disabled={loading}
        >
          new note
        </Button>
      ) : (
        <Note note={note} status={status} onClick={handleClickOpen} />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
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
        <DialogContent className='form-container'>
          <form className='formulario' onSubmit={handleSubmit}>
            <FormControl>
              <div className='title-container'>
              <TextField
                margin='dense'
                id='title'
                label='Note title'
                type='text'
                variant='standard'
                value={title}
                required
                inputProps={{ maxLength: 26,style: { fontSize: '1.2rem', fontWeight: 'bold' }}}
                onChange={(e) => {
                  const newValue = e.target.value.substring(0,26)
                  setTitle(newValue)
                }}
            
              />
        <DialogActions>
          <IconButton id='close-button' onClick={handleClose} color='normal2'>
            <CancelIcon />
          </IconButton>
        </DialogActions>

              </div>
              <TextareaAutosize
                autoFocus
                className='text-area'
                maxRows={6}
                maxLength={156}
                placeholder='Enter note...'
                value={text}
                onChange={(e) => {
                  const newValue = e.target.value.substring(0,156)
                  setText(newValue);
                }}
              
              />
              <div className='text-limit'>{156 - text.length} characters left</div>

              <RadioGroup
                row
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue={'pending'}
                name='radio-buttons-group'
                onChange={(e) => {
                  setStat(e.target.value);
                }}
              >
                <div className='options-group'>
                  <div className='status-group'>

                  <FormControlLabel
                    className='radio-status'
                    value='pending'
                    control={<Radio />}
                    label='pending'
                  />
                  <FormControlLabel
                    className='radio-status'
                    value='oncourse'
                    control={<Radio />}
                    label='oncourse'
                  />
                  <FormControlLabel
                    className='radio-status'
                    value='finished'
                    control={<Radio />}
                    label='finished'
                  />
                  </div>

                  <FormControl className='priority'>
                    <InputLabel htmlFor='priority'>priority</InputLabel>
                    <Select
                      id='select-priority'
                      defaultValue={3}
                      label='priority'
                      onChange={(e) => {
                        setPriority(e.target.value);
                      }}
                      inputProps={{
                        name: 'priority',
                        id: 'priority',
                      }}
                    >
                      {labels.labels?.map((label) => (
                        <MenuItem
                          key={label.id}
                          id='select-format'
                          value={label.id}
                        >
                          {label.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </RadioGroup>
              <div className='buttons-container'>
                <Button id='save-button' variant='outlined' type='submit' disabled={loading}>
                  {edit ? 'edit note' : 'new note'}
                </Button>
                {edit && <ModalPopUpDeleteNote noteId={note.id} edit={edit} handleClose={handleClose}  />}
              </div>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ModalPopUpNewNote;
