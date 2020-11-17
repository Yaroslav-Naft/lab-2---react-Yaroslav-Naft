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
    constructor(){
        super()
        //put initial state of componenet
        this.state = {
            message: 'Test'
        }
    }
    UpdateState(){
        this.setState = {
            message: 'Message has been Changed!'
        }
    }

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
<br></br>
<br></br>
<h1>Message: {this.state.message}</h1>
<br></br>
<br></br>

                <button onClick={() => this.UpdateState()}>Update State</button>



                   </div>

                </div>
        )
    }
}
