//DEPENDENCIAS
import { useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';

//MUI
import { FormControl, Button, TextField, InputAdornment, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

//MODAL
import ModalPopOutRegister from '../../components/ModalPopUpRegister/ModalPopUpComponent';


//ESTILOS
import '../LoginForm/LoginForm.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authLogin,error,setError } = useAuth();

  const theme = useTheme();
  const handleForm = async (e) => {
    
      e.preventDefault();
      await authLogin(email, password);
      
    }

  return (
  <div className='form-control'> 
    <FormControl>
      <TextField className='textField'
        id="email"
        label="Email"
        margin='normal'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}
          
        variant='standard'
        required
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
      />
      <TextField className='textField'
        id="password"
        label="Password"
        margin='normal'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError('');
        }}
        variant='standard'
        type='password'
        required
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
      />
      <p className="error">{error.message}</p>
      <Button  onClick={handleForm} variant="outlined" >
        Login
      </Button>
    </FormControl>
    <ModalPopOutRegister/>
  </div>
  );
};
