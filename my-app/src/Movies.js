import React, { Component } from 'react'
import movieData from "./data/movieData";

function initiateMovie(){
    

}




export default class Movies extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <div class="container">
                <div>Poster:{movieData[0].moviePoster}</div>
                <div>Title:{movieData[0].movieTitle}</div>
                <div>Date:{movieData[0].movieReleaseDate}</div>
                </div>

                <div class="container">
                <div>Poster:{movieData[1].moviePoster}</div>
                <div>Title:{movieData[1].movieTitle}</div>
                <div>Date:{movieData[1].movieReleaseDate}</div>
                </div>

                <div class="container">
                <div>Poster:{movieData[2].moviePoster}</div>
                <div>Title:{movieData[2].movieTitle}</div>
                <div>Date:{movieData[2].movieReleaseDate}</div>
                </div>


            </div>
        )
    }
}
