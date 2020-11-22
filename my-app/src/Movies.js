import React, { Component } from 'react'
import MoviesItem from "./MoviesItem";
import Select from "react-select";


//stored the constant part of the url into a variable
const url="https://image.tmdb.org/t/p/w500";

function makeMovie(movieData){
    return  <MoviesItem 
    key = {movieData.id}
    //added the movie part that chanches to URL
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
    this.handleSetType = this.handleSetType.bind(this);
}
//When component has been sucessfully rendered react will automoatically call component did mount
componentDidMount(){
    this.getMovie();
}

//Updating State occurs when componenet has changed
componentDidUpdate(_, prevState){
    if (this.state === prevState) {
        return;
    }
//once we updated component we update the selecttype
//and reload the movies from the API
    this.getByType();
}   

getMovie(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4bb3e5c49b10d81303e2fbea269898af')
    //we convert moviesresult from API to JSON
    .then(moviesresult => moviesresult.json())
    //We pass the JSON data to the state of our component
    .then((json) => {
        //get only the movies for the selected type
    this.setState({
        movies: json.results,
        rendered: true,
        types: ["popular", "top_rated", "now playing", "upcoming"],
        //Default type on initialization
        selectedType: "popular"
    })
    })  
}

//When there is update to the type
//run command below
//and change the url to show the
//movies for the selected type
getByType() {
    //reloading the movies from the API
    const link =`https://api.themoviedb.org/3/movie/${this.state.selectedType}?api_key=4bb3e5c49b10d81303e2fbea269898af`;
    fetch(link)
    .then((result) => result.json())
    .then((json) => {
        //set the state to the new movies type received from the API 
        this.setState({
            movies: json.results,
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
        const { movies, rendered} = this.state;
        //initializing values to define
        //choice variable
        if(rendered === false){
         <div>Component Loading....</div>           
        }
        else{
        const options = [
               {value: "popular", label: "Popular Movies"  },
               {value: "upcoming", label: "Upcoming Movies"  },
               {value: "top_rated", label: "Top Rated Movies"  },
               {value: "now_playing", label: "Now Playing"  },               
            ];
        return (
                <div className="container">
                    <div class="m-5">
                    <h3 class="h5 text-primary">Select Movies by:</h3><Select options={options} onChange={this.handleSetType.bind(this)}/>
                    </div>
                    <div className="row my-2 mx-2">
                    {/* .map function loops through the Data and inserts each instance into the function */}
                    {movies.map(makeMovie)}
                   </div>
                </div>
        )
        }
    }
}