import React, { Component } from 'react'
import { FaFacebookSquare} from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';


export default class Footer extends Component {
    render() {
        return (
            <div>

{/* <!-- Footer --> */}
    <footer>
      <div class="container">
        <div class="about-footer">
          <h5>About Us</h5>
          <ul>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Our Store</a></li>
            <li><a href="#">Stores Near to Me</a></li>
          </ul>
        </div>
        {/* <!--End of the First Footer Column--> */}

        <div class="cart-footer">
          <h5>Customer Care</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        {/* <!--End of the Second Footer Column--> */}

        <div class="social-footer">
          <h5>Follow us</h5>
          <ul>
          <li><a href="#"><FaFacebookSquare /></a></li>
                  <li><a href="#"><FaLinkedin /></a></li>
                 <li> <a href="#"><FaTwitterSquare /></a></li>
              </ul>
      </div>
        {/* <!--End of the Third Footer Column--> */}
        <div class="contact-us-footer">
          <ul class="contact">
            <h5>Contact Us</h5>
            <li
              ><a href="#"
                ><FaEnvelope/></a>
            </li>
            <li
              ><a href="#"
                ><FaPhone/></a
            ></li>
            <li
              ><a href="#"
                ><FaMapMarker/></a
            ></li>
          </ul>
        </div>
      </div>
      {/* <!-- End of Container Footer --> */}
      {/* <!-- Copyright--> */}
      <div class="copyright">
        <p class="m-0 text-center text-white"
          >Copyright &copy; <a href="index.html">The Movies Database</a> <br />
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy </a> |
          <a href="#"> Site Map </a> |
          <a href="credits.html">Sources</a></p
        >
      </div>
      {/* <!-- End of Copyright --> */}
    </footer>
    {/* <!-- End of Footer --> */}
  </div>
        )
    }
}
