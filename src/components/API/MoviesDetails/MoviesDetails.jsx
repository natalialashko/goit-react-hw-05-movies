import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const params = useParams();
  const [currentMovies, setCurrentMovies] = useState([]);
  console.log(params.moviesId)
  useEffect(() => {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmJmNDU3NGU0NmM4MDU0ZjVmMDkyZmQ2NGQzMWIzZiIsInN1YiI6IjY0MzcwNGQwMWY3NDhiMDA3NzE1NGVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJVw4SC0wxekMACd_HjNy4-mtG2EpEBFxroutosJfJc'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${params.moviesId}?language=en-US`, options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
  setCurrentMovies(response)})
  .catch(err => console.error(err));
  },[])
  
  
  return (
    <div>
          <button type="submit">go back</button>
      <h2>{currentMovies.title}</h2>
      <img src="https://api.themoviedb.org/&{currentMovies.backdrop_path}"
 alt="" />
      <p>{currentMovies.overview}</p>
      <h2>Genres</h2>
      {/* <p>{currentMovies.genres}</p> */}
       {/* <ul>
        {currentMovies.genres.map(ellArray => (
          <li key={ellArray.id}>
            <p>
              {ellArray.name}
            </p>
          </li>
        ))}
      </ul>  */}
    </div>
  );
}

export default MoviesDetails;
