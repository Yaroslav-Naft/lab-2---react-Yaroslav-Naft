import React, { Component } from 'react'

export default class MoviesItem extends Component {
    render() {
        return (
            <div class="col-lg-3 col-md-6">
            <div class="card">
                <img src={this.props.poster} class="card-img-top" alt="movie"/> 
                <button type="button" class="btn btn-secondary py-2">See Movie</button>
                <div class="card-body border text-center">
                <div class="card-text">
                    <h5 class=" h4 card-title text-dark">{ this.props.title }</h5>
                <div class="price m-3 text-dark"><h2 class="font-weight-bold">Release Date:</h2><br></br> {this.props.date }</div>
                </div>
            </div>
            </div>


        </div>








        )
    }
}
