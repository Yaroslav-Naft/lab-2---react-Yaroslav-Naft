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
        types: [],
        selectedType: "",
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

getMovie(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4bb3e5c49b10d81303e2fbea269898af')
    //we convert moviesresult from API to JSON
    .then(moviesresult => moviesresult.json())
    //We pass the JSON data to the state of our componentc
    .then(json => {
        //variable movie declared in arrow function is
        //a local var to that anonymous function
    const types = types.map((movie) =>{return movie.types})
         })
    this.setState({
        movies: json.results,
        rendered: true,
        types: Array.from(new Set(types)),
        selectedType: ""
    })
}

//When there is update we get a new state
getByType() {
    const url = `https://fakestoreapi.com/products/category/${this.state.selectedType}`;

    fetch(url)
    .then((result) => result.json())
    .then((json) => {
        this.setState({
            movies: [],
            rendered: true
        })
    })
}

handleSetType(_selectedType) {
    this.setState({
        selectedType: _selectedType.value
    });
  }

    render() {
        //initializing values to define
        //choice variable
        const { rendered, movies, movieTypes} = this.state;
        const options = movieTypes.map((movieTypes)=>{
            return {
                value: movieTypes,
                label: movieTypes
            }
        })

        return (
                <div class="container">
                    <Select options={options} onChange={this.handleSetType.bind(this)}/>
                    <div className="row my-2 mx-2">
                    {/* .map function loops through the Data and inserts each instance into the function     */}
                    {movies.map(makeMovie)}
                   </div>
                </div>
        )
    }
}
commit