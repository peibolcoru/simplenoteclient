import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//CSS
import './WallTag.css';

export const WallTag = ({ wallItem, setWalls,setDisplay,selectedIndex,setSelectedIndex }) => {
  const [loading,setLoading] = useState(false)

  const handleclick = (index) => {
    setSelectedIndex(index);
  };


  return (
    <NavLink to={`/wall/${wallItem.id}` } onClick={()=>{
      handleclick(wallItem.id)
      setDisplay('close')
      
    }} disabled={loading}>
      <li>
        <div className={`tag number${wallItem.id} ${selectedIndex === wallItem.id ? 'selected' : '' }`}>
          {wallItem.title}
        </div>
      </li>
    </NavLink>
  );
};
