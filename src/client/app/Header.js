import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import './flexbox.css';

const headerElement = (
    <div id="headerlement">
        <header>
            <h1>Youssef ATIK</h1>
            <h1>Software Architect</h1>
            <Clock />
        </header>
    </div>
);


class Header extends Component {
  render() {
    return (
      headerElement
    )
  }
}




export default Header;
