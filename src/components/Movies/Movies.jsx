import ResultSearch from 'components/ResultSearch/ResultSearch';
import React, { useState} from 'react';
import { useLocation, useSearchParams } from "react-router-dom";


const Movies = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation();
  const search = searchParams.get('search') ?? "";
  console.log('search:>> ', search )
   console.log('location:>> ', location )
  const handleInputChange = e => {
    setValueSearch(e.target.value.toLowerCase());
  };

    const upDateSearch = evt => {
        evt.preventDefault();
        console.log('valueSearch>>', valueSearch);

      if (valueSearch.trim() === '') {
          setSearchParams({})
            alert('Введіть назву для пошуку');
            return;
        }
         setSearchParams({search:valueSearch })    
          };

  
  return (
    <div>
      <form onSubmit={upDateSearch}>
        <input
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
      <ResultSearch valueSearch={search}/>
       
    </div>
  );
};

export default Movies;
