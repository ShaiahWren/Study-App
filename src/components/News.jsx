import React, { Component } from "react";
import { gsap } from 'gsap'
import { Row, Col, Card, CardTitle } from 'react-materialize';

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

                {this.state.newsLoads.map(article => {
                    return (
                        <div className="news-wrapper">
                        <div className="row">
                            <div class="col s12 m7">
                                <div className="card center">
                                    <div class="card-image">
                                        <img src={article.urlToImage} />
                                    </div>
                                    <div class="card-content">
                                        <h2 className="card-title" href={article.url} target="_blank">{article.title}</h2>

                                        <p>{article.description}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>




                    )
                })
                };

            </>
        )
    }

};

export default News;
