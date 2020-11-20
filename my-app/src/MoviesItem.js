import React, { Component } from 'react'
import Movies from "./Movies";

export default class MoviesItem extends Component {
    render() {
        return (
            <div class="col-lg-3 col-md-6">
            <div class="card card-product-grid">
                <a href="index.html" class="img-wrap"> 
                <img src={this.props.poster} class="card-img-top image" alt="product"/> 
                </a>
                <button type="button" class="btn btn-dark py-2 btn-block">See Movie</button>
                <div class="card-body border-top text-center">
                <div class="card-text">
                    <a href="index.html" class="card-link title"><h5 class="card-title text-muted">{ this.props.title }</h5></a>
                <div class="price mt-1">{this.props.date }</div>
                </div>
            </div>
            </div>


        </div>








        )
    }
}
