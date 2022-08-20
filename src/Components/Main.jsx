import React from 'react'
import './Main.css'

function Main() {
  return (
    <div className='main'>
        <div className="mainbox">
            <h1>Coding Quiz Challenge</h1>
            <p>Try to answer to the following code-related Questions within the time limit.</p>
            <p>
            Keep in mind that incorrect answers will penalize your score/time by ten seconds!
            </p>
            <button type="submit">Start Quiz</button>
        </div>
    </div>
  )
}

export default Main