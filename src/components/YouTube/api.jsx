import axios from 'axios';
const KEY = 'AIzaSyDlx0NXI08Vil8hCza1xfklNqu7piWFoKU';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY
	}
});
