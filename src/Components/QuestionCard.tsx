function QuestionCard({ question, current, setCurrent, isLast, setFinished }) {
  const next = isLast? <button disabled>Next</button> : <button onClick={() => setCurrent(current + 1)}>Next</button>;
  const previous = current === 0? <button disabled>Previous</button> : <button onClick={() => setCurrent(current - 1)}>Previous</button>;

  function decodeHTML(htmlString) {
    let txt = document.createElement("text_area")
    txt.innerHTML = htmlString
    return txt.innerHTML
  }
  function handleSubmit() {
    setFinished(1)
  }

  return (
    <div className="questionPanel">

      <div className="question">
        {decodeHTML(question.question)}
      </div>

      <form onSubmit={(e) => {e.preventDefault()}}>
        <div className="options">
          {question.options.map((each) => {
            let input = <input onClick={() => {question.answer = String(each)}}type="radio" name="answer"  value={each}></input>
            let a = question.answer
            if (a !== null && a === each) {
              input = <input defaultChecked onClick={() => {question.answer = String(each)}} type="radio" name="answer"  value={each}></input>
            }
            return (
              <div className='option' key={each}>
                {input}
                <label id={each} htmlFor={each}>{decodeHTML(each)}</label>
              </div >
            )
          })}
        </div>

      </form>

      <div className="nav">
        {previous}
        <button onClick={handleSubmit} type="submit">Submit</button>
        {next}
      </div>
    </div>
  )
  
}

export default QuestionCard;