import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import NewsList from './NewsList/NewsList'

function App() {
	return (
		<div className='App'>
			<Header />
      <NewsList />
		</div>
	);
}

export default App;
