import React from 'react';
import { render } from 'react-dom';
import './index.css';



const Header = () => {
  return (
    <header>

      <nav class="navbar">
        <a href="/"><img src="https://www.logoarena.com/contestimages/public_new/6611/9490_1452633872_image.png" alt="logo" width="250" height="200"/></a>
        <ul id="nav-link">
          <li><a href="/">Tutoring Jobs</a></li>
          <li><a href="/">Sign Up</a></li>
          <li><a href="/">Log In</a></li>
          <li >
            <a >
              <i ></i><span >Account</span></a>
            <div >
              <a  href="/">Profile</a>
              <a  href="/">Settings</a>
            </div>
          </li>
          <li><a href="/">Logout</a></li>
        </ul>

      </nav>

    </header>
  )
}

const Banner = ()=>{
  return (
    <div id="banner">
     <img src="https://pretoriatutors.com/wp-content/uploads/2017/04/Maths-Background.jpeg" alt="Home Page Banner" width="1920" height="720"/>
     <span><button>Find Tutor</button></span>
     <span><button>Become a Tutor</button></span>
    </div>
  )
}



render(
  <div>
    <Header/>
    <Banner/>
  </div>,
  document.getElementById('root')
)