import React, { Component } from 'react';
import axios from 'axios';
import './Quote.css'

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
                console.log(res);
				this.setState({ quote: res.data.quote });
			})
			.catch(console.error);
	}

	render() {
		return (
			<div>
				<h2>"{this.state.quote}"</h2>
                <h3 className='kanye'>–Kanye</h3>
			</div>
		);
	}
}

export default Quote;
