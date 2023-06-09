import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const params = useParams();

  const [currentMovies, setCurrentMovies] = useState([]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  console.log('location. state >>', location);
  // console.log(params.moviesId);
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
      `https://api.themoviedb.org/3/movie/${params.moviesId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setCurrentMovies(response);
      })
      .catch(err => console.error(err));
  }, [params.moviesId]);

  const pathImgCurrentMovies = `https://image.tmdb.org/t/p/w500${currentMovies.backdrop_path}`;

  console.log('currentMovies--', currentMovies);
  console.log(pathImgCurrentMovies);
  console.log('currentMovies.genres', currentMovies.genres);
  return (
    <div>
      <Link className={css.link} to={backLinkLocationRef.current}>
        go back
      </Link>
      <div className={css.info}>
        <div className={css.photo_movie}>
          <img width="350" src={pathImgCurrentMovies} alt="" />
        </div>

        <div className={css.info_movie}>
          <h2>{currentMovies.title}</h2>
          <p>User score: {currentMovies.popularity}%</p>

          <p>{currentMovies.overview}</p>

          <h2>Genres</h2>

          {currentMovies?.genres?.map(ellArray => (
            <span key={ellArray.id}>{ellArray.name} </span>
          ))}
        </div>
      </div>

      <div>
        <h2>Additional information</h2>
        <ul>
          <li key="Cast">
            <Link
              className="nav-link active"
              aria-current="page"
              to={`/movies/${String(params.moviesId)}/cast`}
            >
              Cast
            </Link>
          </li>
          <li key="Reviews">
            <Link
              className="nav-link"
              to={`/movies/${String(params.moviesId)}/reviews`}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesDetails;
