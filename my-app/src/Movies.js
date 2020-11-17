import React, { Component } from 'react'
import { movieData } from "./data/movieData";

export default class Movies extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <div class="container">
                <span>Poster:{movieData.moviePoster[0]}</span>
                <span>Title:{movieData.movieTitle[0]}</span>
                <span>Date:{movieData.movieReleaseDate[0]}</span>
                </div>

                <div class="container">
                <span>Poster:{movieData.moviePoster[1]}</span>
                <span>Title:{movieData.movieTitle[1]}</span>
                <span>Date:{movieData.movieReleaseDate[1]}</span>
                </div>

                <div class="container">
                <span>Poster:{movieData.moviePoster[2]}</span>
                <span>Title:{movieData.movieTitle[2]}</span>
                <span>Date:{movieData.movieReleaseDate[2]}</span>
                </div>


            </div>
        )
    }
}
