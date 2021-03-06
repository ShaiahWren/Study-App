import React from 'react';
import SearchBar from './Searchbar';
import api from './api';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class YouTube extends React.Component {
	state = {
		videos: [],
		selectedVideo: null
	};
	handleSubmit = async (termFromSearchBar) => {
		const response = await api.get('/search', {
			params: {
				q: termFromSearchBar
			}
		});

		this.setState({
			videos: response.data.items
		});
		console.log('this is resp', response);
	};
	handleVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
								<h3 className="video-intro">Explore coding tutorials, lofi music, and more! </h3>

				<SearchBar handleFormSubmit={this.handleSubmit} />
				<div className="ui grid">
					<div className="row">
						<div className="col m7">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="col m5">
							<VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default YouTube;
