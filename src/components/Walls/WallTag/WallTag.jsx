import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//CSS
import './WallTag.css';

export const WallTag = ({ wallItem, setWalls,setDisplay }) => {
  const [loading,setLoading] = useState(false)
  return (
    <NavLink to={`/wall/${wallItem.id}` } onClick={()=>setDisplay('close')} disabled={loading}>
      <li>
        <div className={`tag number${wallItem.id}`}>
          {wallItem.title}
        </div>
      </li>
    </NavLink>
  );
};
