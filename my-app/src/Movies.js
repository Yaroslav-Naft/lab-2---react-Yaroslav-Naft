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
    render() {
        return (
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
