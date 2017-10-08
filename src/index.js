import React from 'react';
import ReactDOM from 'react-dom';
import Header from './App';
import Footer from './Footer';
import './index.css';

function App() {
	return (
		<div>
			<Header />
			<Footer />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


