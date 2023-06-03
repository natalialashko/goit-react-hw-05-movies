import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const ResultSearch = ({ valueSearch }) => {
  const [arrayMovieSearch, setArrayMovieSearch] = useState([]);
   const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
    
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmJmNDU3NGU0NmM4MDU0ZjVmMDkyZmQ2NGQzMWIzZiIsInN1YiI6IjY0MzcwNGQwMWY3NDhiMDA3NzE1NGVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJVw4SC0wxekMACd_HjNy4-mtG2EpEBFxroutosJfJc',
    },
  };
 useEffect(() => {
            if (!valueSearch) {
                return;
            }
            console.log('valueSearch>>**', valueSearch);

            fetch(
                `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${valueSearch}`,
                options
            )
                .then(response => response.json())
                .then(response => {
                   console.log(response.results);
                    setArrayMovieSearch(response.results)
                })
                .catch(err => console.error(err));
        }, [valueSearch]);

  return (
    <div>
       <ul>
        {arrayMovieSearch.map(ellArray => (
          <li key={ellArray.id}>
            <NavLink to={`/movies/${String(ellArray.id)}`}>
              {ellArray.title}
              {ellArray.name}
            </NavLink>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default ResultSearch;
