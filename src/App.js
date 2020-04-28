import React, { Component } from 'react';
import moviedblogo from './themoviedb.svg';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      results: [],
      selected: {}
    }
  }

  apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=7c24c7e4a99e51dc0b99079afac010c2&language=en-US&page=1&include_adult=false&query=batman";

  componentDidMount() {
    axios.get(this.apiUrl)
      .then(res => {
        this.setState({
          results: res.data.results
        })
      })
  }

  handleInput = (e) => {
    let s = e.target.value

    this.setState({
      searchText: s,
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={moviedblogo} alt="the moviedb logo" />
        </header>
        <main>
          <Search handleInput={this.handleInput} />
          <Results results={this.state.results} />
        </main>
      </div>
    );
  }
};

export default App;
