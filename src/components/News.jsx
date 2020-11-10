import React, { Component } from "react";
import { gsap } from 'gsap'

class News extends Component {
    state = {
        newsLoads: [],
    };
     
    async componentDidMount() {
        const newsData = await this.loadData();
        this.setState({
            newsLoads: newsData.articles
        });
    };

     _handleNews = async () => {
        const newsData = await this.loadData();
        this.setState({
            newsLoads: newsData.articles
        });
     };

     loadData = async () => {
         const response = await fetch(
             `http://newsapi.org/v2/everything?q=programming&apiKey=fd362930e3b74a278a7cff2c0cf8b3f9`);
        const data = await response.json();
         return data;
     };

     render() {

        // gsap.fromTo('div .newsCard', {opacity:0}, {opacity:1, stagger:0.3, duration:3});

        return (
            <>
             <h1> News </h1>
             {/* <form>
                <button type="button" onClick={() => this._handleNews()}> 
                News Update
                </button>
             </form> */}
             {this.state.newsLoads.map(article => {
                 return ( 
                    <div className='newsCard card'>
                        <div className='newsCol1'>
                            <a href={article.url}><img className='newsImg' src={article.urlToImage}></img></a>
                        </div>
                        <div className='newsCol2'>
                            <a href={article.url}><h3>{article.title}</h3></a>
                            <a href={article.url}><p>{article.description}</p></a>
                        </div>
                    </div>)})
            };
    
            </> 
        )}

};

export default News;
