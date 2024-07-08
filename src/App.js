import React, { useCallback, useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-post-1b385-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const addedMovies=[];
      for(const key in data){
        addedMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }

    

      setMovies(addedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

   const onSaveMovies = async(enteredMovie) => {
  const response=await fetch("https://react-post-1b385-default-rtdb.firebaseio.com/movies.json",{
    method:'POST',
    body: JSON.stringify(enteredMovie),
    headers:{
      'Content-type':'application/json'
    }
   })
   const data=await response.json()
   console.log(data)
  };

  const deleteMovieHandler = (movieId) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
  };

  return (
    <React.Fragment>
      <section>
        <MyForm newMovies={onSaveMovies} />
        <button type="button" onClick={fetchMoviesHandler}>
          Fetch Movies
        </button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && (
          <MoviesList movies={movies} onDeleteMovie={deleteMovieHandler} />
        )}
        {!isLoading && movies.length === 0 && !error && <p>No movies found</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
