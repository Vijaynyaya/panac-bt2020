import React from 'react';
import { Category } from './../types/types';
import { getQuestions } from '../services/Opentbd';

function Start({ session, score, categories, setQuestions, setFinished }) {
  async function formSubmit() {
    let form = document.forms[0]
    setQuestions(
      await getQuestions(Number(form['amount'].value), form['category'].value, form['difficulty'].value, form['type'].value, session)
    )
    await setFinished(0)
  }  

  let SCORE = <div></div>
  if (score !== null) {
    SCORE = <div className="score">You got {score} questions correct.</div>
  }

  return (
    <div className='startPanel'>

      {SCORE}

      <form id='getQuestions' onSubmit={(e) => {e.preventDefault(); formSubmit()}}>
        <div className='formItem'>
        <label htmlFor='amount'>No of questions:</label>
        <input type='number' min='1' max='50' name='amount' placeholder="number of questions" defaultValue='5' autoFocus required/>
        </div>
        <div className="formItem">
        <label htmlFor='difficulty'>Difficulty level:</label>
        <select name='difficulty'>
          <option value=''>Mixed</option>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
        </div>
        <div className="formItem">
        <label htmlFor='type'>Type of questions:</label>
        <select name="type">
          <option value=''>Mixed</option>
          <option value="multiple">Multiple Choice Questions</option>
          <option value='boolean'>True/False</option>
        </select>
        </div>
        <div className="formItem">
        <label htmlFor='category'>Category of questions:</label>
        <select name='category'>
          <option value=''>Mixed</option>
          {
            categories.map((each: Category) => {
              return <option key={each.id} value={each.id}>{each.name}</option>
            })
          }
        </select>
        </div>
        <button type="submit">Start the quiz</button>
      </form>
    </div>
  )
}

export default Start;