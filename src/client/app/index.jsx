import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Navigation from './Navigation';
import Article from './Article';
import Footer from './Footer';
import './index.css';

console.log('Hello World!');

function App() {
	return (
		<div class="flex-container">
			<Header />
			<Navigation />
			<Article />
			<Footer />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


