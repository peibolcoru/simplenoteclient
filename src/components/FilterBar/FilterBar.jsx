import React from 'react';

import './FilterBar.css';
import SearchNote from './SearchNote/SearchNote';
import FilterBy from './FilterBy/FilterBy';

const FilterBar = ({setAllNotes}) => {

  return <div className='filter-bar-container'>
    <SearchNote/>
    <FilterBy setAllNotes={setAllNotes}/>
  </div>;
};

export default FilterBar;
