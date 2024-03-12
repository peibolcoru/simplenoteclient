import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//ESTILOS
import './NewWallForm.css';

//HOOKs
import { getWallService, newWallService } from '../../services/wallService';
import { Box, TextField } from '@mui/material';

const NewWallForm = ({ setWalls}) => {
  const [wall, setWall] = useState(``);
  const [error, setError] = useState(``);
  const [loading,setLoading]= useState(false)
  const navigate = useNavigate();

  return (
    <div className='wall-form-container'>
      <form
        className='form-container'
        action=''
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            setLoading(true)
            const newWall = await newWallService(wall);
           
            const updatedWalls = await getWallService();

            // recogemos el id de la ultima inserción
            const reverseUpdatedWalls = updatedWalls.data.reverse();
            const idNewWall = reverseUpdatedWalls[0].id;

            navigate(`/wall/${idNewWall}`);
            //seteamos la lista de muros
            setWalls(updatedWalls.data);
            setWall(``);


          } catch (err) {
            setError(err.message);
          }
          setLoading(false)
        }}
      >
        <Box display='flex' alignItems='end' gap='5px'>
          <TextField
            margin='dense'
            id='new-wall-form'
            label='New wall'
            type='text'
            variant='standard'
            inputProps={{ maxLength: 20 }}
            value={wall}
            required
            onChange={(e) => {
              setWall(e.target.value);
              setError(``);
            }}
          />
         <button className='new-wall-button' disabled={loading}>add</button>
        </Box>
        {error ? <p className='error-form-wall'>{error}</p> : null}
      </form>
    </div>
  );
};

export default NewWallForm;
