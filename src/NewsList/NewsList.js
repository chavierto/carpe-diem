import React, { Component } from 'react';
import './NewsList.css';
import NewsCard from '../NewsCard/NewsCard';
import axios from 'axios';

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsArr: null,
		};
	}

	componentDidMount() {
		const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_CARPE_DIEM_NYT}`;

		axios(url)
			.then((res) => {
				this.setState({ newsArr: res.data.results });
			})
			// .then(this.NYTnews())
			.catch(console.error);
	}
	render() {
		console.log(this.state.newsArr);
		return (
			<div className='news-list'>
				<h2 className='news-title'>NYT Top News:</h2>
				<div className='news-list-grid'>
					{this.state.newsArr &&
						this.state.newsArr.slice(0, 5).map((article, i) => (
							<div key={i}>
								<NewsCard article={article} />
							</div>
						))}
				</div>
				<img className='nyt-logo' src='https://developer.nytimes.com/files/poweredby_nytimes_150a.png?v=1583354208339' alt='Data provided by The New York Times'></img>
			</div>
		);
		// return (
		// 	<div className='news-list'>
		// 		<h1>NewsList loads</h1>
		// 		<div className='news-list-grid'>
		// 			{for (i = 0; i < 6; i++) {
		//                 this.props.news.map((article,i) => (
		//                     <div key={i}>
		//                         <NewsCard article={article[i]}/>
		//                     </div>
		//                 ))}};
		// 		</div>
		// 	</div>
		// );
	}
}

export default NewsList;
