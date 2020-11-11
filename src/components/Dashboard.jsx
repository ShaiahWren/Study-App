import React, { useState, useEffect, useRef } from "react";
import { Route, Link } from "react-router-dom";
import M from "materialize-css";
import axios from "axios";

//Componenets
import News from "./News";
import YouTube from "./YouTube/YouTube";
import Jobs from "./Jobs";
import FlashcardList from "./FlashcardList";
import JobsApi from './JobsApi';
import Navbar from './Navbar'

let instance = M.Tabs.init();

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
    });
  });

  useEffect(() => {
    axios
      .get("https://secret-gorge-43213.herokuapp.com/questions")
      .then((res) => {
        console.log("API data >>>>", res.data);
      });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: questionItem.correct_answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }

  async function javascriptButton(e) {
    e.preventDefault();
    await axios
      .get("https://secret-gorge-43213.herokuapp.com/questions/javascript")
      .then((res) => {
        setFlashcards(
          res.data.rows.map((questionsItem, index) => {
            return {
              id: questionsItem.id,
              question: questionsItem.question,
              answer: questionsItem.answer,
            };
          })
        );
      });
  }

  async function reactButton(e) {
    e.preventDefault();
    await axios
      .get("https://secret-gorge-43213.herokuapp.com/questions/react")
      .then((res) => {
        setFlashcards(
          res.data.rows.map((questionsItem, index) => {
            return {
              id: questionsItem.id,
              question: questionsItem.question,
              answer: questionsItem.answer,
            };
          })
        );
      });
  }

  async function pythonButton(e) {
    e.preventDefault();
    await axios
      .get("https://secret-gorge-43213.herokuapp.com/questions/python")
      .then((res) => {
        setFlashcards(
          res.data.rows.map((questionsItem, index) => {
            return {
              id: questionsItem.id,
              question: questionsItem.question,
              answer: questionsItem.answer,
            };
          })
        );
      });
  }
  return (
    <>
      <Navbar />

      <div className="col s12 nav-extend">
        <ul className="tabs dashboard-links nav-extend">
          <li className="tab col s3">
            <Link className="blue-grey-text text-lighten-5" to="/dashboard">
              News
            </Link>
          </li>
          <li className="tab col s3">
            <Link
              className="blue-grey-text text-lighten-5"
              to="/dashboard/flashcards"
            >
              Flashcards
            </Link>
          </li>
          <li className="tab col s3">
            <Link
              className="blue-grey-text text-lighten-5"
              to="/dashboard/video"
            >
              Videos
            </Link>
          </li>
          <li className="tab col s3">
            <Link
              className="blue-grey-text text-lighten-5"
              to="/dashboard/jobs"
            >
              Jobs
            </Link>
          </li>
          {/* <li className="tab col s3">
            <Link className="blue-grey-text text-lighten-5" to="/dashboard/jobApi">
              Jobs Api
            </Link>
          </li> */}
        </ul>
      </div>

      <Route exact path="/dashboard">
        <News />
      </Route>

      <Route path="/dashboard/flashcards">
        <form className="header" onSubmit={handleSubmit}>
          <button className="btn-small teal darken-1" onClick={javascriptButton}>
            Javascript
          </button>
          <button className="btn-small teal darken-1" onClick={reactButton}>
            React
          </button>
          <button className="btn-small teal darken-1" onClick={pythonButton}>
            Python
          </button>
        </form>
        <div className="container">
          <FlashcardList flashcards={flashcards} />
        </div>
        <FlashcardList flashcards={flashcards} />
      </Route>

      <Route path="/dashboard/video">
        <YouTube />
      </Route>

      <Route path="/dashboard/jobs">
        <Jobs />
      </Route>
      <Route path="/dashboard/jobApi">
        <JobsApi />
      </Route>
    </>
  );
};

export default Dashboard;
