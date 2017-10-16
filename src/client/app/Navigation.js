import React, { Component } from 'react';
import './flexbox.css';

class Navigation extends Component {
  render() {
    return (
    	<div id="navigationElement">
      		<nav class="nav">
            <ul>
              <li><a href="#">London</a></li>
              <li><a href="#">Paris</a></li>
              <li><a href="#">Tokyo</a></li>
            </ul>
          </nav>
		  </div>
    )
  }
}

export default Navigation;