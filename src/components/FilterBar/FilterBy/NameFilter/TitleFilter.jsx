import React, { useEffect, useState } from 'react';

import './TitleFilter.css';

import { useNotes } from '../../../../Hooks/useNotes';

const TitleFilter = ({ setAllNotes }) => {
  const { allNotes } = useNotes();
  const [invert, setInvert] = useState(false);

  const handleTitleFilter = () => {
    const orderByTitleNotes = [...allNotes].sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    if (!invert) {
      setAllNotes(orderByTitleNotes);
      setInvert(true);
    } else {
      setAllNotes(orderByTitleNotes.reverse());
      setInvert(false);
    }
  };

  return (
    <div className='filter title-filter'>
      <p onClick={handleTitleFilter}>Title</p>
    </div>
  );
};

export default TitleFilter;
