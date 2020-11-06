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
			<div className="ui container" style={{ marginTop: '1em' }}>
				<SearchBar handleFormSubmit={this.handleSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="left column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="right column">
							<VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default YouTube;
