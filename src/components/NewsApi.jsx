import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardTitle } from 'react-materialize';;


export default function NewsApi() {

    const [newsData, setNewsData ] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://gnews.io/api/v4/search?q=tech&token=b2c3330268d125f89f9516e8d8388da3'
            )
            .then(function(response) {
                setNewsData(response.data.articles);
            });
        // setNewsData(newsObject.articles)
    })

    const getTechNews = () => {
        axios
            .get(
                'https://gnews.io/api/v4/search?q=tech&token=b2c3330268d125f89f9516e8d8388da3&max=10'
            )
            .then(function(response) {
                setNewsData(response.data.articles);
            });
            // setNewsData(newsObject.articles)

    };
    const getProgrammingNews = () => {
        axios
            .get(
                'https://gnews.io/api/v4/search?q=programming&token=b2c3330268d125f89f9516e8d8388da3&max=10'
            )
            .then(function(response) {
                setNewsData(response.data.articles);
            });
            // setNewsData(newsObject.articles)

    };
    const getJavascriptNews = () => {
		axios
			.get(
				'https://gnews.io/api/v4/search?q=javascript&token=b2c3330268d125f89f9516e8d8388da3&max=10'
			)
			.then(function(response) {
				setNewsData(response.data.articles);
            });
            // setNewsData(newsObject.articles)

	};
	const getPythonNews = () => {
		axios
			.get(
				'https://gnews.io/api/v4/search?q=programming&token=b2c3330268d125f89f9516e8d8388da3&max=10'
			)
			.then(function(response) {
				setNewsData(response.data.articles);
            });
            // setNewsData(newsObject.articles)

	};


    return (
        <>
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
            <h3>Please chose a search above</h3>
	
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

const newsObject = {
    "totalArticles": 224,
    "articles": [
        {
            "title": "Python creator Guido van Rossum joins Microsoft",
            "description": "Guido van Rossum, the creator of the Python programming language, today announced that he has unretired and joined Microsoft’s Developer Division. Van Rossum, who was last employed by Dropbox, retired last October after six and a half years at the company. Clearly, that retirement wasn’t meant to last. At Microsoft, van Rossum says, he’ll work […]",
            "content": "Guido van Rossum, the creator of the Python programming language, today announced that he has unretired and joined Microsoft’s Developer Division.\nVan Rossum, who was last employed by Dropbox, retired last October after six and a half years at the co... [1905 chars]",
            "url": "https://techcrunch.com/2020/11/12/python-creator-guido-van-rossum-joins-microsoft/",
            "image": "https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-158650277.jpg?w=600",
            "publishedAt": "2020-11-12T14:32:27Z",
            "source": {
                "name": "TechCrunch",
                "url": "https://techcrunch.com/"
            }
        },
        {
            "title": "Dodelijke python shockeert bestuurder tijdens autorit",
            "description": "Een automobilist rijdt nietsvermoedend door het Thaise Chiang Rai als er plotseling iets opduikt op zijn voorruit.",
            "content": "Video\nEen automobilist rijdt nietsvermoedend door het Thaise Chiang Rai als er plotseling iets opduikt op zijn voorruit....",
            "url": "https://www.telegraaf.nl/video/256081263/dodelijke-python-shockeert-bestuurder-tijdens-autorit",
            "image": "https://www.telegraaf.nl/images/1200x630/filters:format(jpeg):quality(80)/cdn-kiosk-api.telegraaf.nl/06161604-24cc-11eb-b069-02d2fb1aa1d7.jpg",
            "publishedAt": "2020-11-12T10:02:00Z",
            "source": {
                "name": "Telegraaf.nl",
                "url": "https://www.telegraaf.nl/"
            }
        },
        {
            "title": "6-летний мальчик стал самым молодым программистом в мире",
            "description": "Шестилетний мальчик из Индии вошел в Книгу рекордов Гиннеса как самый молодой программист в мире. Для этого мальчику пришлось сдать экзамен на знание Python",
            "content": "Шестилетний мальчик из Индии вошел в Книгу рекордов Гиннеса как самый молодой программист в мире. Для этого мальчику пришлось сдать экзамен на знание языка программирования Python.\nПрограммирование всем возрастам покорно. И это мы не только про старш... [1046 chars]",
            "url": "https://www.popmech.ru/technologies/642133-6-letniy-malchik-stal-samym-molodym-programmistom-v-mire/",
            "image": "https://images11.popmeh.ru/upload/img_cache/3ca/3ca99b4b85531ad56123e3bd8281ebe0_ce_1280x672x0x0_fitted_1260x700.jpg",
            "publishedAt": "2020-11-12T05:14:00Z",
            "source": {
                "name": "Популярная Механика",
                "url": "https://www.popmech.ru/"
            }
        },
        {
            "title": "Ultimate Python & AI Certification Bundle Is Up For A Massive 97% Discount Offer For A Few Days - Avail Now",
            "description": "Ultimate Python & AI Certification Bundle is your chance to upgrade your skills in just a few days. Avail offer before it expires.",
            "content": "In order to stay on top of your game in the world of IT, you need to upgrade your skills all the time. That is the only way you will stay relevant in the industry. This sounds daunting but it doesn’t have to be. Wccftech is going to simplify the proc... [2793 chars]",
            "url": "https://wccftech.com/ultimate-python-ai-certification-bundle-discount/",
            "image": "https://cdn.wccftech.com/wp-content/uploads/2020/11/Ultimate-Python-AI-Certification-Bundle.jpg",
            "publishedAt": "2020-11-10T13:47:57Z",
            "source": {
                "name": "Wccftech",
                "url": "https://wccftech.com/"
            }
        },
        {
            "title": "6-year-old boy becomes world's youngest computer programmer",
            "description": "Arham Om Talsania has passed the Python Programming Language exam to become the youngest ever computer programmer",
            "content": "Arham Om Talsania is pictured with this Guinness World Records certificate in this still from a video.\nAHMEDABAD: A six-year-old student, Arham Om Talsania, has earned a Guinness World Records certificate by becoming the youngest computer programmer,... [616 chars]",
            "url": "https://www.thenews.com.pk/latest/741804-6-year-old-boy-becomes-worlds-youngest-computer-programmer",
            "image": "https://www.thenews.com.pk/assets/uploads/updates/2020-11-10/l_741804_090407_updates.jpg",
            "publishedAt": "2020-11-09T19:00:00Z",
            "source": {
                "name": "The News International",
                "url": "https://www.thenews.com.pk/"
            }
        },
        {
            "title": "Ahmedabad class 2 student clears Python programming language test",
            "description": "Arham Om Talsania, the Class 2 student who has cleared the Microsoft certification exam, has entered Guinness World Record as the World's Youngest Computer Programmer",
            "content": "A six-year-old boy from Ahmedabad has entered Guinness World Record as the World's Youngest Computer Programmer by clearing the Python programming language.\nArham Om Talsania, the Class 2 student has cleared the Microsoft certification exam at Pearso... [1403 chars]",
            "url": "https://www.livemint.com/education/news/ahmedabad-class-2-student-clears-python-programming-language-test-11604974881178.html",
            "image": "https://images.livemint.com/img/2020/11/10/600x338/AFP_8UW39F_1604976703456_1604976745058.jpg",
            "publishedAt": "2020-11-09T18:30:00Z",
            "source": {
                "name": "Livemint",
                "url": "https://www.livemint.com/"
            }
        },
        {
            "title": "Fargo Recap: The Bull and the Python",
            "description": "An episode filled with origin stories finds all sorts of ways to complicate our feelings toward its colorful criminals. A recap of ‘The Nadir,’ episode 8 of season 4 of Noah Hawley’s Fargo on FX.",
            "content": "Fargo The Nadir Season 4 Episode 8 Editor’s Rating 3 stars * * * « Previous Next Photo: Elizabeth Morris/FX\nAt the end of the previous episode, it was pretty obvious what was going to happen. Loy let Gaetano loose after letting him know Josto had lef... [9146 chars]",
            "url": "https://www.vulture.com/article/fargo-recap-season-4-episode-8-the-nadir.html",
            "image": "https://pyxis.nymag.com/v1/imgs/e06/15c/6b94ac7f43816441beeeec8873ea58c10b-fargo.1x.rsocial.w1200.jpg",
            "publishedAt": "2020-11-09T04:09:12Z",
            "source": {
                "name": "Vulture",
                "url": "https://www.vulture.com/"
            }
        },
        {
            "title": "Become an expert Python developer and discover AI in this $40 course bundle",
            "description": "When computer science students arrive at college, one of the first languages they learn is Python. Why? Because it's easy to pick up and very versatile. The Ultimate Python & Artificial Intelligence Certification Bundle helps you get a similar education, with 11 hands-on courses for only $39.99. Behind JavaScript, Python is the second most popular programming language in the",
            "content": "When computer science students arrive at college, one of the first languages they learn is Python. Why? Because it's easy to pick up and very versatile. The Ultimate Python & Artificial Intelligence Certification Bundle helps you get a similar educat... [984 chars]",
            "url": "https://www.windowscentral.com/become-expert-python-developer-and-discover-ai-40-course-bundle",
            "image": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/11/sale_48032_article_image-51q5.jpg",
            "publishedAt": "2020-11-08T18:12:02Z",
            "source": {
                "name": "Windows Central",
                "url": "https://www.windowscentral.com/"
            }
        },
        {
            "title": "Become an expert Python developer and discover AI in this $40 course bundle",
            "description": "When computer science students arrive at college, one of the first languages they learn is Python. Why? Because it's easy to pick up and very versatile. The Ultimate Python & Artificial Intelligence Certification Bundle helps you get a similar education, with 11 hands-on courses for only $39.99. Behind JavaScript, Python is the second most popular programming language in the",
            "content": "When computer science students arrive at college, one of the first languages they learn is Python. Why? Because it's easy to pick up and very versatile. The Ultimate Python & Artificial Intelligence Certification Bundle helps you get a similar educat... [984 chars]",
            "url": "https://www.imore.com/become-expert-python-developer-and-discover-ai-40-course-bundle",
            "image": "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/11/sale_48032_article_image-51q5.jpg",
            "publishedAt": "2020-11-08T18:03:02Z",
            "source": {
                "name": "iMore",
                "url": "https://www.imore.com/"
            }
        },
        {
            "title": "Become an expert Python developer and discover AI in this $40 course bundle",
            "description": "When computer science students arrive at college, one of the first languages they learn is Python. Why? Because it's easy to pick up and very versatile. The Ultimate Python & Artificial Intelligence Certification Bundle helps you get a similar education, with 11 hands-on courses for only $39.99. Behind JavaScript, Python is the second most popular programming language in the",
            "content": "When computer science students arrive at college, one of the first languages they learn is Python. Why? Because it's easy to pick up and very versatile. The Ultimate Python & Artificial Intelligence Certification Bundle helps you get a similar educat... [984 chars]",
            "url": "https://www.androidcentral.com/become-expert-python-developer-and-discover-ai-40-course-bundle",
            "image": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/field/image/2020/11/sale_48032_article_image-51q5.jpg",
            "publishedAt": "2020-11-08T18:00:02Z",
            "source": {
                "name": "Android Central",
                "url": "https://www.androidcentral.com/"
            }
        }
    ]
}
