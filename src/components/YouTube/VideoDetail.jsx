import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div>
				{/* <h1>Explore coding tutorials, lofi music, and more! </h1> */}
				<br />
				<p style={{ fontSize: '25px' }}></p>
			</div>
		);
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	console.log(typeof video);
	return (
		<div>
			<div className="ui embed">
				<iframe width="400" height="230" src={videoSrc} allowFullScreen title="Video player" />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
