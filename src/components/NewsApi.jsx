import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardTitle } from 'react-materialize';;


export default function NewsApi() {

    const [newsData, setNewsData ] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://gnews.io/api/v4/search?q=tech&token=b2c3330268d125f89f9516e8d8388da3&max=10'
            )
            .then(function(response) {
                setNewsData(response.data.articles);
            });
    })

    const getTechNews = () => {
        axios
            .get(
                'https://gnews.io/api/v4/search?q=tech&token=b2c3330268d125f89f9516e8d8388da3&max=10'
            )
            .then(function(response) {
                setNewsData(response.data.articles);
            });
    };
    const getProgrammingNews = () => {
        axios
            .get(
                'https://gnews.io/api/v4/search?q=programming&token=b2c3330268d125f89f9516e8d8388da3&max=10'
            )
            .then(function(response) {
                setNewsData(response.data.articles);
            });
    };
    const getJavascriptNews = () => {
		axios
			.get(
				'https://gnews.io/api/v4/search?q=javascript&token=b2c3330268d125f89f9516e8d8388da3&max=10'
			)
			.then(function(response) {
				setNewsData(response.data.articles);
			});
	};
	const getPythonNews = () => {
		axios
			.get(
				'https://gnews.io/api/v4/search?q=programming&token=b2c3330268d125f89f9516e8d8388da3&max=10'
			)
			.then(function(response) {
				setNewsData(response.data.articles);
			});
	};


    return (
        <>
        <h1> News </h1>
        <button className="btn-small teal darken-1 jobBtn" onClick={getTechNews}>
				Tech News
			</button>
			<button className="btn-small teal darken-1 jobBtn" onClick={getProgrammingNews}>
				Programming news
			</button>
			<button className="btn-small teal darken-1 jobBtn" onClick={getJavascriptNews}>
				JavaScript News
			</button>
			<button className="btn-small teal darken-1 jobBtn" onClick={getPythonNews}>
				Python News
			</button>
	
        {newsData.map(article => {
            return (
                

                <Row className="news-wrap">
                    <Col m={10} s={10} l={10} offset="s1 m1 l1">
                        <Card>
                            <img className="newsImg" src={article.image}></img>
                            <a href={article.url} target="_blank">
                                <h4>{article.title}</h4>
                            </a>
                            <p>{article.description}</p>
                        </Card>
                    </Col>
                </Row>





            )
        })
        }

    </>
    )
}
