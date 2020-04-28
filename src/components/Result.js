import React from 'react'

function Result(props) {

  return (
    <div className="result" >
      <img src={props.poster} alt="" />
      <h3>{props.movie.original_title}</h3>
    </div>
  )
}

export default Result
