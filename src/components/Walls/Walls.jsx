//ESTILOS
import './Walls.css';
import NewWallForm from '../../forms/NewWallForm/NewWallForm';
import { WallTag } from './WallTag/WallTag';
import { useContext, useState } from 'react';
import { WallsContext } from '../../contexts/WallsContext';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Menu } from '@mui/material';
import { MenuDisplay } from '../MenuDisplay/MenuDisplay';

export const Walls = () => {
  const { walls, setWalls, loading } = useContext(WallsContext);

  const [display, setDisplay] = useState('');
  const [selectedIndex, setSelectedIndex] = useState();

  if (loading) {
    return <h2>Loading</h2>;
  }

  const handleDisplay = () => {
    if (display === 'close') {
      setDisplay(`open`);
    } else {
      setDisplay('close');
    }
  };

  const handleclick = (index) => {
    setSelectedIndex(index);
    console.log(`seleccionado:${selectedIndex}`);
  };

  return (
    <div className='walls-container scale-up-center' onClick={handleDisplay}>
      <div className='header-walls'>
        <p className='wall-text'>my walls</p>
        <NewWallForm setWalls={setWalls} />
      </div>

      <ul className={'walls-list ' + (display === 'close' ? 'close' : '')}>
        {walls &&
          walls.map((wallItem) => {
            return (
              <WallTag
                key={wallItem.id}
                wallItem={wallItem}
                setWalls={setWalls}
                setDisplay={setDisplay}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            );
          })}
      </ul>
      <MenuDisplay display={display} setDisplay={setDisplay} />
    </div>
  );
};
