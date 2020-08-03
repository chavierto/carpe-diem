import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Quote from './Quote/Quote'
import NewsList from './NewsList/NewsList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			news: {},
		};
	}

	NYTnews = (res) => {
		this.setState({ res });
	};

	render() {
		return (
			<div className='App'>
				<Header />
				<Quote />
				<NewsList bird={this.state.news} NYTnews={this.NYTnews}/>
			</div>
		);
	}
}

export default App;
