import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { FormControl, InputAdornment, TextField } from '@mui/material';

import '../ModalPopUpRegister/ModalPopUpComponent.css';
import { useTheme } from '@mui/material/styles';

import { useAuth } from '../../Hooks/useAuth';

export const ModalPopOutRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  //control del modal
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const { authRegisterUser,error,setError } = useAuth();

  const theme = useTheme();
  const openPopup = () => {
    setOpen(true);
    setError(``)
  };
  const closePopUp = () => {
    setOpen(false);
  };

  const handleForm = async (e) => {
      e.preventDefault();
      const res = await authRegisterUser(username, email, password, password2);
      if (res.status === 'ok') closePopUp()  ;
      
    } 
  
  return (
    <div className='container registerUser'>
      <p className="register-button" onClick={openPopup}>Registrar usuario</p>
      <Dialog
        className='ModalPopUpRegister'
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        PaperProps={{
          style: {
            opacity: '0.9',
            borderRadius: '10px',
            backgroundColor: '#598392',
            border: '1px solid white',
            color: 'white',
            boxShadow:
              '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
          },
        }}
      >
        <DialogActions>
          <IconButton onClick={closePopUp} id="login-icon">
            <CancelIcon/>
          </IconButton>
        </DialogActions>
        <h3>Registro de Usuario</h3>
        
        <DialogContent className='ModalPopUpRegister'>
          <FormControl>
            <div className='register-form-container'>
            <TextField
              id='user-name-field'
              label='Username'
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              InputLabelProps={{
                style: {
                  color: 'white',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle id="login-icon"/>
                  </InputAdornment>
                ),
                style: {
                  color: 'white',
                },
                
              }}
              variant='standard'
            />
            <TextField
              id='user-email-field'
              label='Email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              InputLabelProps={{
                style: {
                  color: 'white',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon id="login-icon"/>
                  </InputAdornment>
                ),
                style: {
                  color: 'white',
                },
              }}
              variant='standard'
            />
            <TextField
              id='user-password-field'
              type='password'
              label='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputLabelProps={{
                style: {
                  color: 'white',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <KeyIcon id="login-icon"/>
                  </InputAdornment>
                ),
                style: {
                  color: 'white',
                },
              }}
              variant='standard'
            />
            <TextField
              id='user-repeat-field'
              type='password'
              label='Repeat Password'
              color='primary'
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              InputLabelProps={{
                style: {
                  color: 'white',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <KeyIcon id="login-icon"/>
                  </InputAdornment>
                ),
                style: {
                  color: 'white',
                },
              }}
              variant='standard'
            />

            </div>
            <p className="error">{error.message || error} </p>
          <Button className="register-button" variant = 'outlined' onClick={handleForm} >Register</Button>
          </FormControl>
        </DialogContent>
        
      </Dialog>
    </div>
  );
};
export default ModalPopOutRegister;
