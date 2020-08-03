import React, { Component } from 'react';
import axios from 'axios';
import './Quote.css';

class Quote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: null,
		};
	}
	componentDidMount() {
		const url = `https://api.kanye.rest/`;

		axios(url)
			.then((res) => {
				this.setState({ quote: res.data.quote });
			})
			.catch(console.error);
	}

	render() {
		return (
			<div className='quote-box'>
				<div className='kanye-title'>
					<p>Kanye of the day:</p>
				</div>
				<div className='kanye-quote'>
					<p>{this.state.quote}</p>
				</div>
			</div>
		);
	}
}

export default Quote;
