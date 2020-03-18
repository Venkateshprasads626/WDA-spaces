import React, { Component } from 'react'
import $ from 'jquery'
import './header.css'
import wdalogo from '../../Images/wdalogo.svg'


class Header extends Component{

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-fixed-top  navbar-dark nav1">
            <a class="navbar-brand" href="#">
                <img src={wdalogo} className="wdalogo" />
             </a>
  <a class="navbar-text" href="#">WDA SPACES</a>
  <button class="navbar-toggler ml-auto onclick" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
           <a href="#">HOME</a>
        </li>
        <li class="nav-item">
            <a href="#">PROJECTS</a>
        </li>
        <li class="nav-item">
           <a href="#">RECOGNITION</a>
        </li>
        <li class="nav-item">
            <a href="#">ABOUT</a>
        </li>
        <li class="nav-item">
            <a href="#">CONTACT</a>
        </li>
      </ul>
  </div>

</nav> 
        );
    }
}

export default Header