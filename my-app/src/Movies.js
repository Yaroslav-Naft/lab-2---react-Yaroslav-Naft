import React, { Component } from 'react'
import movieData from "./data/movieData";
import MoviesItem from "./MoviesItem";
import Select from react-select

const url="https://image.tmdb.org/t/p/w500";
function makeMovie(movieData){
    return  <MoviesItem 
    key = {movieData.id}
    poster ={url + movieData.poster_path}
    title = {movieData.title}
    date = {movieData.release_date} />;
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
    this.getMovie();
}

//Updating State when there is a change
componentDidUpdate(_, prevState){
    if (this.state === prevState) {
        return;
    }
    this.getByType();
}   

//When there is update we get a new state
getByType() {
    const url = `https://fakestoreapi.com/products/category/${this.state.selectedType}`;

    fetch(url)
    .then((result) => result.json())
    .then((json) => {
        this.setState({
            movies: [],
            rendered: false
        })
    })
    
}







getMovie(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4bb3e5c49b10d81303e2fbea269898af')
    //we convert moviesresult from API to JSON
    .then(moviesresult => moviesresult.json())
    //We pass the JSON data to the state of our component
    .then(json => {
        this.setState({
            movies: json.results,
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
                    {movies.map(makeMovie)}
                   </div>
                </div>
        )
    }
}
