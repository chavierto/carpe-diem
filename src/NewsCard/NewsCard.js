import React, { Component } from 'react'
import './NewsCard.css'

class NewsCard extends Component {
    render() {
        return (
					<div className='news-card'>
						<div>
							<img
								src={this.props.article.multimedia[2].url}
								alt={this.props.article.multimedia[2].caption}></img>
						</div>
						<div className='article-title'>
							<p>{this.props.article.title}</p>
						</div>
					</div>
				);
    }
}

export default NewsCard
