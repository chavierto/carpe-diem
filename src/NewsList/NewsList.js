import React, { Component } from 'react';
import './NewsList.css';
import NewsCard from '../NewsCard/NewsCard';

class NewsList extends Component {
	render() {
		const test = [0, 1, 2, 3, 4];
		return (
			<div className='news-list'>
				<h1>NewsList loads</h1>
				<div className='news-list-grid'>
					{test.map((i) => (
						<div>
							<NewsCard />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default NewsList;
