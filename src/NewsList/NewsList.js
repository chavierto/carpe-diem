import React, { Component } from 'react';
import './NewsList.css';
import NewsCard from '../NewsCard/NewsCard';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsArr: null,
			currentArticle: null,
			show: false,
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

	handleShow = (index) => {
		this.setState({
			show: true,
			currentArticle: this.state.newsArr.slice(0, 5)[index],
		});
	};

	handleClose = () => {
		this.setState({ show: false, currentArticle: null });
	};

	render() {
		return (
			<div className='news-list'>
				<h2 className='news-title'>NYT Top News:</h2>
				<div className='news-list-grid'>
					{this.state.newsArr &&
						this.state.newsArr.slice(0, 5).map((article, i) => {
							return (
								<div key={i} onClick={(e) => this.handleShow(i)}>
									<NewsCard article={article} />
								</div>
							);
						})}
				</div>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Title>
						{this.state.currentArticle && this.state.currentArticle.abstract}
					</Modal.Title>
					<Modal.Body>
						{this.state.currentArticle && (
							<img
								className='modal-img'
								alt={this.state.currentArticle.multimedia[0].caption}
								src={this.state.currentArticle.multimedia[0].url}
							/>
						)}
						{this.state.currentArticle && (
							<p>
								<a href={this.state.currentArticle.url}target='_blank' rel='noopener noreferrer'>Link to article</a>
							</p>
						)}
					</Modal.Body>
				</Modal>
				<img
					className='nyt-logo'
					src='https://developer.nytimes.com/files/poweredby_nytimes_150a.png?v=1583354208339'
					alt='Data provided by The New York Times'
				/>
			</div>
		);
	}
}

export default NewsList;
