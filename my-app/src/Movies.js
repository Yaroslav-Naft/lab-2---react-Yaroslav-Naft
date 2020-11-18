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
    // .then(json => {
    //     this.setState({
    //         movies: [],
    //         rendered: true
    //      })
    .then(data => console.log(data))
    // })
}
    // constructor(){
    //     super()
    //     //put initial state of componenet
    //     this.state = {
    //         message: 'Test'
    //     }
    // }
    // UpdateState(){
    //     this.setState({
    //         message: 'Message has been Changed!'
    //     });
    // }
    render() {

        return (

            // constructor(props){
            //     //super is necessary for the base react constructor to use the this keyword
            //     super(props);
            //     this.state = {
            //         movies: [],
            //         isLoaded: false
            //     }

            // }

                <div class="container">
                    <div class="row my-2 mx-2">
                    {/* .map function loops through the Data and inserts each instance into the function     */}
                    {movieData.map(makeMovie)}
                {/* <MoviesItem 
                poster = {movieData[0].moviePoster}
                title = {movieData[0].moviePoster}
                date = {movieData[0].moviePoster}
                />
                <MoviesItem 
                poster = {movieData[1].moviePoster}
                title = {movieData[1].moviePoster}
                date = {movieData[1].moviePoster}
                />
                <MoviesItem 
                poster = {movieData[2].moviePoster}
                title = {movieData[2].moviePoster}
                date = {movieData[2].moviePoster}
                /> */}
                   </div>
                </div>
        )
    }
}
