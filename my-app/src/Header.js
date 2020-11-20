import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
              <h1 className="display-4">Header</h1>

    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">WALKABOOKS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html"
                >Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="books.html">Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about-us.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact-us.html">Contact Us</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="registration.html">
                <i class="fa fa-user-circle" style="font-size: 32px"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="cart.html">
                <i class="fa fa-shopping-cart" style="font-size: 32px"></i
                ><span id="cart-icon-count">0</span></a
              >
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
































            </div>
        )
    }
}
