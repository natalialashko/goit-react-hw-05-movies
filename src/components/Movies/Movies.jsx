import ResultSearch from 'components/ResultSearch/ResultSearch';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Movies = () => {
    const [valueSearch, setValueSearch] = useState('');
    

  
    
  const handleInputChange = e => {
    setValueSearch(e.currentTarget.value.toLowerCase());
  };

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log('valueSearch>>', valueSearch);

        if (valueSearch.trim() === '') {
            alert('Введіть назву для пошуку');
            return;
        }
        console.log('valueSearch>>', valueSearch);
        
          };

       

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          // className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={valueSearch}
          onChange={handleInputChange}
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ResultSearch valueSearch={valueSearch}/>
          {/* <ul>
        {arrayMovieSearch.map(ellArray => (
          <li key={ellArray.id}>
            <a>
              {ellArray.title}
              {ellArray.name}
            </a>
          </li>
        ))}
      </ul>  */}
    </div>
  );
};

export default Movies;
