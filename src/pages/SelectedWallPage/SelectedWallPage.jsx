import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useNotes } from '../../Hooks/useNotes';
import { StatusWindow } from '../../components/StatusWindow/StatusWindow';

import { deleteWallService, getWallService } from '../../services/wallService';

import ModalPopUpNewNote from '../../components/ModalPopUpNewNote/ModalPopUpNewNote';
import ModalPopUpDeleteWall from '../../components/ModalPopUpDeleteWall/ModalPopUpDeleteWall';
import FilterBar from '../../components/FilterBar/FilterBar';

import { WallsContext } from '../../contexts/WallsContext';

import './SelectedWallPage.css';

export const SelectedWallPage = () => {
  const { allNotes, setAllNotes } = useNotes();
  const { walls, setWalls } = useContext(WallsContext);

  const [animation,setAnimation]= useState("");

  const { id } = useParams();

  const titleWall = walls && walls.find((wall) => wall.id.toString() === id);

  useEffect(()=>{  
    setAnimation("scale-up-hor-center ")
  },[id])

  return (
    <div className={`selected-wall-page ${animation}`}>
      <div className='actions-menu'>
        <ModalPopUpNewNote />
        <FilterBar setAllNotes={setAllNotes} />
      </div>
      <div className='header-wall'>
        <p className='title-wall'>{titleWall && titleWall.title}</p>
        <ModalPopUpDeleteWall wallId={id} />
      </div>
      <div className="all-status-window" >
        <StatusWindow allNotes={allNotes} status={'pending'} className={`all-status-window  ${animation}`}/>
        <StatusWindow allNotes={allNotes} status={'oncourse'} className={`all-status-window  ${animation}`}/>
        <StatusWindow allNotes={allNotes} status={'finished'} className={`all-status-window  ${animation}`}/>
      </div>
    </div>
  );
};
