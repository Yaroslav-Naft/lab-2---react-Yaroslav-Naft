import React, { Component } from 'react'
import movieData from "./data/movieData";
import MoviesItem from "./MoviesItem";

function makeMovie(movieData){
    return  <MoviesItem 
    key = {movieData.id}
    poster = {movieData.moviePoster}
    title = {movieData.moviePoster}
    date = {movieData.moviePoster} />;
}

export default class Movies extends Component {

constructor(props){
    super(props);
    this.state = {
        movies: [],
        rendered: false
    }
}
//When component has been sucessfully rendered react will automoatically call component did mount
componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/550?api_key=4bb3e5c49b10d81303e2fbea269898af')
    //we convert moviesresult from API to JSON
    .then(moviesresult => moviesresult.json())
    //We pass the JSON data to the state of our component
    .then(json => {
        this.setState({
            movies: [],
            rendered: true
         })
    })
}
    render() {

        const {movies, rendered} = this.state;
        return (
                <div class="container">
                    <div className="row my-2 mx-2">
                    {/* .map function loops through the Data and inserts each instance into the function     */}
                    {movieData.map(makeMovie)}
                   </div>
                </div>
        )
    }
}
