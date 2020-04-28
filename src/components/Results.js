import React from 'react'
import Result from './Result';

function Results(props) {
  return (
    <section className="results">
      {props.results.map(movie => {
        const moviePoster = "https://image.tmdb.org/t/p/w500" + movie.poster_path
        return (
          <Result movie={movie} key={movie.id} poster={moviePoster} />
        )
      })
      }
    </section >
  )
}

export default Results
