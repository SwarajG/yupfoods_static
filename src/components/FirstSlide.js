import React, { Component } from 'react';
import '../static/app.css';
import logo from '../static/logo.png';
import bullet from '../static/bullet.png';
import facebook_logo from '../static/facebook_logo.png';
import insta_logo from '../static/insta_logo.png';

export default class FirstSlide extends Component {
  render() {
    const minHeight = window.innerHeight;
    return (
      <div className="firstSlide" style={{ minHeight, maxWidth: window.innerWidth }} id="first">
        <div className="firstSlideNavbarWrapper">
          <ul className="firstSlideNavbar">
            <li className="firstSlideNavbarList">
              <img src={logo} alt="logo" className="logo" />
            </li>
            <li className="firstSlideNavbarList">
              <img src={bullet} alt="bullet" className="bulletStyle" />
              <span className="navbarNameStyle">
                <a href="#second">About</a>
              </span>
            </li>
            <li className="firstSlideNavbarList">
              <img src={bullet} alt="bullet" className="bulletStyle" />
              <span className="navbarNameStyle">
                <a href="#third">Team</a>
              </span>
            </li>
            <li className="firstSlideNavbarList">
              <img src={bullet} alt="bullet" className="bulletStyle" />
              <span className="navbarNameStyle">
                <a href="#fourth">Contact</a>
              </span>
            </li>
            {/* <li className="firstSlideNavbarList">
              <img src={bullet} alt="bullet" className="bulletStyle" />
              <span className="navbarNameStyle">
                <a href="">News</a>
              </span>
            </li> */}
            {/* <li className="firstSlideNavbarList">
              <img src={bullet} alt="bullet" className="bulletStyle" />
              <span className="navbarNameStyle">
                <a href="">Blog</a>
              </span>
            </li> */}
            <li className="firstSlideNavbarList socialNavList">
              <a href="https://www.facebook.com/UpandUpResturant" target="_blank">
                <img src={facebook_logo} alt="facebook_logo" className="socialIconStyle" />
              </a>
            </li>
            <li className="firstSlideNavbarList socialNavList">
              <a href="https://www.instagram.com/Upanduprestaurant/" target="_blank">
                <img src={insta_logo} alt="insta_logo" className="socialIconStyle" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
