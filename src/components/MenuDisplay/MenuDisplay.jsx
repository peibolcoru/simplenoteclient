import React, { useEffect, useState } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './MenuDisplay.css'
export  const MenuDisplay = ({display,setDisplay}) => {
    
    

    const handleDisplay = () => {
        if (display==='close') {setDisplay(`open`)} else{setDisplay('close')};
      };
      
  return (
    <div className='openCLoseButton' onClick={handleDisplay}>
      {display === 'close' ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
    </div>
  );
};
  