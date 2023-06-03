import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const params = useParams();
  const [reviewsMovies, setReviewsMovies] = useState([]);
  console.log('params  Reviews>>', params.moviesId);
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
      `https://api.themoviedb.org/3/movie/${params.moviesId}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setReviewsMovies(response);
      })
      .catch(err => console.error(err));
  }, []);

  console.log('reviewsMovies.total_results  >>', reviewsMovies.total_results);
  console.log('reviewsMovies  >>', reviewsMovies);
  console.log('reviewsMovies.results  >>', reviewsMovies.results);
  return (
    <div>
      {reviewsMovies.total_results>0 ? 
        <ul>
          {reviewsMovies?.results?.map(ellArray => (
            <li key={ellArray.id}>
              <h2>Author: {ellArray.author} </h2>
              <p>{ellArray.content} </p>
            </li>
          ))}
        </ul>
       : 
        <p> We don't have any reviews for this movie </p>
      }
    </div>
  );
};

export default Reviews;
