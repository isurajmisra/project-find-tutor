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
      <img id="circle-img" src={process.env.PUBLIC_URL + '/Home-Sec-1/crop-circle.png'} alt="banner-cicle" width="300" height="300" />
    </header>
  );
}

const Banner = () => {
  return (
    <section id="banner" >
      <div id="banner-img" > { /* <img src={process.env.PUBLIC_URL + '/FP-1-Text.svg'} alt="banner-text" width="791" height="187"/> */}
        <div id="banner-div">
          <h1 id="banner-heading" > Achieve Top Grades <br /> With Us. </h1>
          <p id="banner-text" > Education is the most powerful weapen we can <br />use to change the world. </p>
          <span>
            <button id="find-tutor-btn" className="home-btn"> Find Tutor </button>
            <button id="become-tutor-btn" className="home-btn"> Become Tutor </button>
          </span>
        </div>
        <img src={process.env.PUBLIC_URL + '/Home-Sec-1/FP-1-Child-image.png'}
          alt="Home Page Banner"
          width="509"
          height="650" />

      </div>
    </section>
  );
}

const SectionTwo = () => {
  return (
    <section id="banner-2">
      <img src={process.env.PUBLIC_URL + '/Home-Sec-2/sec-2.png'}
        alt="Home Page Banner"
        width="834"
        height="849" />
      <div id="sec-2-div">
        <h2 id="sec-2-heading">Join Us in 3 Simple Steps.</h2>
        <div id="main-steps-div">
      <div className="steps">
      <svg width="190" height="190">
          <circle cx="100" cy="100" r="80" stroke="gray" stroke-width="10" fill="white" />
          <text className="numbers" x="50%" y="50%" text-anchor="middle" fill="black" font-size="100px" font-family="Arial" dy=".3em">1</text>
        Sorry, your browser does not support inline SVG.
      </svg>
      <span className="steps-text-span" >
        <p className="steps-text">Enter Your address and search the tutor from your nearby location.</p>
      </span>
      </div>
      <div className="steps">
      <span className="steps-text-span" >
        <p className="steps-text">Select your preferred tutor course from the list.</p>
      </span>
      <svg width="190" height="190">
          <circle cx="100" cy="100" r="80" stroke="gray" stroke-width="10" fill="white" />
          <text className="numbers" x="50%" y="50%" text-anchor="middle" fill="black" font-size="100px" font-family="Arial" dy=".3em">2</text>
        Sorry, your browser does not support inline SVG.
      </svg>
      
      </div>
      <div className="steps">
      <svg width="190" height="190">
          <circle cx="100" cy="100" r="80" stroke="gray" stroke-width="10" fill="white" />
          <text className="numbers" x="50%" y="50%" text-anchor="middle" fill="black" font-size="100px" font-family="Arial" dy=".3em">3</text>
        Sorry, your browser does not support inline SVG.
      </svg>
      <span className="steps-text-span" >
        <p className="steps-text">Verify the tutor and register yourself.</p>
      </span>
      </div>
      </div>
      </div>
    </section>
  )
}

render(
  <div>
    <Header />
    <Banner />
    <SectionTwo />
  </div>,
  document.getElementById('root')
)