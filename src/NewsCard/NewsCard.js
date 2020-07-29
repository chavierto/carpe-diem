import React, { Component } from 'react'
import './NewsCard.css'

class NewsCard extends Component {
    render() {
        return (
					<div className ='news-card'>
						<div>
							<p>image</p>
						</div>
						<div>
							<p>text</p>
						</div>
					</div>
				);
    }
}

export default NewsCard
