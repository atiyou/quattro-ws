import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class Footer extends Component {
  render() {
    return (
    	<div id="footerElement" className="App-footer">
      		<h5>Youssef Atik | Privacy Policy | Disclosures | </h5>
    		<Clock />
  		</div>
    )
  }
}

export default Footer;