import React, { Component } from 'react'
import movieData from "./data/movieData";
import movieDataItem from "./movieDataItem";

function makeMovie(movieData){
    return  <movieDataItem 
    key = {movieData.id}
    poster = {movieData.moviePoster}
    title = {movieData.moviePoster}
    date = {movieData.moviePoster} />;
}

export default class movieData extends Component {

constructor(props){
    super(props);
    this.state = {
        movieData: [],
        rendered: false
    }
}
//When component has been sucessfully rendered react will automoatically call component did mount
componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/550?api_key=4bb3e5c49b10d81303e2fbea269898af')
    //we convert movieDataresult from API to JSON
    .then(movieDataresult => movieDataresult.json())
    //We pass the JSON data to the state of our component
    .then(json => {
        this.setState({
            movieData: [],
            rendered: true
         })
    })
}
    render() {

        const {movieData, rendered} = this.state;
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
