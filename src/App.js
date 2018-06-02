import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  //Render : componentWillMount() -> render() -> componentDidMount()
  //Update componentWillReciveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      console.log(movie);
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          key={movie.id}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    //after await
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--Loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}
export default App;
