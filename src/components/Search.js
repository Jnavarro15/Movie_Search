import React from 'react'

function Search(props) {
  return (
    <section>
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onChange={props.handleInput}
      />
    </section>
  )
}

export default Search
