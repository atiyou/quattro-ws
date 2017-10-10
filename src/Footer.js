import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class Footer extends Component {
  render() {
    return (
    	<div id="footerElement">
      		<h5>Youssef Atik | Privacy Policy | Disclosures | </h5>
    		
  		
  		 <footer>
  			<p>Posted by: Youssef ATIK</p>
  			<p>Contact information: <a href="mailto:youssef.atik@gmail.com">
  				youssef.atik@gmail.com</a>.</p>
  				<Clock />
		</footer> 
		</div>
    )
  }
}

export default Footer;