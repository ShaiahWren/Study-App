import React, { Component } from "react";

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
        return (
            <>
             <h1> This is News!! </h1>
    
             <form>
                <button type="button" onClick={() => this._handleNews()}> 
                News Update
                </button>
             </form>
             {this.state.newsLoads.map(article => {
                 return ( 
                     <div>
                        <a href={article.url}><p href={article.url}>{article.title}</p></a>
                        <p>{article.description}</p>
                        <a href={article.url}><img src={article.urlToImage}></img></a>
                    </div>)})
            };
    
            </> 
        )}

};




export default News;
