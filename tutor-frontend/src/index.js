import React from 'react';
import { render } from 'react-dom';
import './index.css';
import logo from './LOGO.svg';

const Header = () => {
  return (
    <header>
      <a href="/" > < img src={logo}
        alt="logo"
        width="200"
        height="150" /> </a>
      {/* <nav class="navbar" >


        <ul id="nav-link">
          <li><a href="/">Tutoring Jobs</a></li>
          <li><a href="/">Sign Up</a></li>
          <li><a href="/">Log In</a></li>
          <li >
            <a >
              <i ></i><span >Account</span></a>
            <div >
              <a href="/">Profile</a>
              <a href="/">Settings</a>
            </div>
          </li>
          <li><a href="/">Logout</a></li>
        </ul>


      </nav> */}

    </header>
  );
}

const Banner = () => {
  return (
    <section id="banner" >
      <div id="banner-img" > { /* <img src={process.env.PUBLIC_URL + '/FP-1-Text.svg'} alt="banner-text" width="791" height="187"/> */}
        <div id="banner-div">
          <h6 id="banner-heading" > Achieve Top Grades <br/> With Us. </h6>
          <p id="banner-text" > Education is the most powerful weapen we can use to change. </p>
          <span>
            <button id="find-tutor-btn" className="home-btn"> Find Tutor </button>
            <button id="become-tutor-btn" className="home-btn"> Become Tutor </button>
          </span>
        </div>
        <img src={process.env.PUBLIC_URL + '/FP-1-Child-image.png'}
          alt="Home Page Banner"
          width="509"
          height="650" />
      </div>
    </section>
  );
}



render(
  <div>
    <Header />
    <Banner />
  </div>,
  document.getElementById('root')
)