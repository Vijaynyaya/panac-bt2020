import React, { useState, useEffect } from 'react';

import { Question , Status, Answers, Category } from './types/types';
import { getCategories, generateSession } from './services/Opentbd';
import { Start, QuestionCard } from './Components';

import './styles.css';

function App() {
  let [session, setSession] = useState<string>('');
  let [questions, setQuestions] = useState<Question[]>([]);
  let [categories, setCategories] = useState<Category[] | boolean>([]);
  
  let [answers, setAnswers] = useState<Answers>(new Answers(0));
  let [current, setCurrent] = useState<number>(0);
  let [finished, setFinished] = useState<Status>(-1);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      let temp = await getCategories()
      if (Array.isArray(temp)) {
        setCategories(temp)
      }
      setSession(await generateSession())
    }
    fetchData();
  }, [])
  console.log(finished, 'app')
  function computeScore() {
    let score = 0;
    for (let i in answers.answers) {
      score = answers.answers[i] === questions[i]['correct_answer']? score + 1 : score;
    }
    return score
  }
  function mainComponent() {  
    if (!session) {
      return <div className="wait">Generating session</div>
    }
    if (session && finished === -1) {
      return <Start score={null} setQuestions={setQuestions} session={session} categories={categories} setFinished={setFinished} setAnswers={setAnswers}/>
    } else if ( finished === 1) {
      console.log(finished)
      return <Start score={computeScore()} session={session} setQuestions={setQuestions} categories={categories} setFinished={setFinished} setAnswers={setAnswers}/>
    } else {
      return <QuestionCard question={questions[current]} current={current} setCurrent={setCurrent} isLast={questions.length - 1 === current} setFinished={setFinished} answers={answers}/>
    }
  }

  return (
    <div className="app">
      <h1>Vijaynyaya's Quiz App</h1>
      <div className="main">
        {mainComponent()}
      </div>
    </div>
  )
}

export default App;