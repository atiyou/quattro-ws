import React, { Component } from 'react';
import './flexbox.css';

class Article extends Component {
  render() {
    return (
    	<div id="articleElement">
      		<article class="article"> 
            <h1>Summary</h1>
            <p>London is the capital city of England. It is the most populous city in the United Kingdom,
              with a metropolitan area of over 13 million inhabitants.</p>
            <p>Standing on the River Thames, London has been a major settlement for two millennia,
              its history going back to its founding by the Romans, who named it Londinium.</p>
            <p><strong>Resize this page to see that what happens!</strong></p>
          </article>
		</div>
    )
  }
}

export default Article;