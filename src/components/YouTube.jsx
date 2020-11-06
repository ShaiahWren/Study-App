import React, { Component } from 'react'

const API = 'AIzaSyDlx0NXI08Vil8hCza1xfklNqu7piWFoKU'
const channalID = 'UCXgGY0wkg0zynnHvSEVmE3A'
const result = 10;



let finalURL =`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channalID}&part=snippet,id&order=data&maxResults=${result}`

class YouTube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked(){
        const getMoviesFromApi = () => {
            return fetch(finalURL)
                .then((response) => response.json())
                .then((json) => {
            // console.log(json)
            const resultyt = json.items.map(obj => 'https://www.youtube.com/embed/'+obj.id.videoID);
            this.setState({resultyt})
            console.log(this.resultyt)
            })
            .catch((error) => {
            console.error(error);
            });
};
    }

    render() {
        // console.log(finalURL)
    return (
        <>
           <h1>YouTube?</h1>
           <div>
           <button onClick={this.clicked}>Get youtube videos</button>
            
           <div className='youtube'>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/c6t3bW7kx6E" 
           frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowFullScreen></iframe>
           </div>
           </div>
        </>
        );
    }
}

export default YouTube;

