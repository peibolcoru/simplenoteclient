import React, { useState } from 'react';

import './SearchNote.css';
import TextField from '@mui/material/TextField';
import { Button, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useNotes } from '../../../Hooks/useNotes';

const SearchNote = () => {
  const [keyword, setKeyword] = useState();
  const {searchParams,setSearchParams } = useNotes();

  const handleSearchNotes = (e) => {
    e.preventDefault();
    
  };
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      setSearchParams(new URLSearchParams({ keyword }));
      }}>

      <TextField
        variant='standard'
        id='search-note-field'
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder='Enter keyword'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <button id='search-button'>
              <SearchIcon id='search-icon'/>
              </button>
            </InputAdornment>
          ),
        }}
      />

    </form>
     
  );
};

export default SearchNote;
