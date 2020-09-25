import React from 'react';
import { render } from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


const Header = () => {
  return (
    <header>

      <nav >
        <ul>
          <li><a href="#">Tutoring Jobs</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Log In</a></li>
          <li >
            <a >
              <i ></i><span >Account</span></a>
            <div >
              <a  href="#">Profile</a>
              <a  href="#">Settings</a>
            </div>
          </li>
          <li><a href="#">Logout</a></li>
        </ul>

      </nav>

    </header>
  )
}

const Banner = ()=>{
  return (
    <div id="banner">
     <img src="#" alt="Home Page Banner" width="720" height="480">
       <span><button>Find Tutor</button></span>
       <span><button>Become a Tutor</button></span>
     </img>
    </div>
  )
}



render(
  <div>
    <Header/>
  </div>,
  document.getElementById('root')
)