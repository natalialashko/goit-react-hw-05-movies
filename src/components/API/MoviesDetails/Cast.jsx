import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();
  const [castMovies, setCastMovies] = useState([]);
  console.log('params  cast>>',params.moviesId);
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
      `https://api.themoviedb.org/3/movie/${params.moviesId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setCastMovies(response);
      })
      .catch(err => console.error(err));
  },[]);
// const urlPhoto = `https://image.tmdb.org/t/p/w500${castMovies.profile_path}`;
  console.log('castMovies--', castMovies);
  return <div>
    
    {castMovies?.cast?.map(ellArray => (
      <div key={ellArray.id}>
<img width="100" src={`https://image.tmdb.org/t/p/w500${ellArray.profile_path}`} alt="" />
 
       <p>{ellArray.original_name} </p>
       <p>character:{ellArray.character} </p>
      </div>

      ))} 


  </div>;
};

export default Cast;
