import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDelete={props.onDeleteMovie}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
