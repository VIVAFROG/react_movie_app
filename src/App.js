import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {
  //Render : componentWillMount() -> render() -> componentDidMount()
  //Update componentWillReciveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {
      
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'Hello!',
        movies: [
          {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51k1epcewKL.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://images-na.ssl-images-amazon.com/images/I/41VXPrZfDXL.jpg"
          },
          {
            title:  "Oldboy",
            poster:  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title:   "Star Wars",
            poster:   "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
          },
          {
            title:"trainspotting",
            poster:"https://ia.media-imdb.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) =>{
      return  <Movie title={movie.title} poster={movie.poster} key={index}/>
     })
     return movies
  }

  render() {
    return (   
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}
export default App;
