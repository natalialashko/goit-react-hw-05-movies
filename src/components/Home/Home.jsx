import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Home() {
  const [arrayMovie, setArrayMovie] = useState([]);
    const location = useLocation();
  console.log('location/ state >>',location.state);

 
  useEffect(() => {
     const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmJmNDU3NGU0NmM4MDU0ZjVmMDkyZmQ2NGQzMWIzZiIsInN1YiI6IjY0MzcwNGQwMWY3NDhiMDA3NzE1NGVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJVw4SC0wxekMACd_HjNy4-mtG2EpEBFxroutosJfJc',
    },
    };
    
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response.results);
        setArrayMovie(response.results);
        console.log(arrayMovie);
      })
      .catch(err => console.error(err));
  }, [arrayMovie]);

  return (
      <div>
           <h1>Trending today</h1>
      <ul>
        {arrayMovie.map(ellArray => (
          <li key={ellArray.id}>
            <NavLink to={`/movies/${String(ellArray.id)}`}>
              {ellArray.title}
              {ellArray.name}

            </NavLink>
          </li>
        ))}
      </ul>
       <Outlet/>
    </div>
  );
}

export default Home;

