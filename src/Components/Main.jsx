import React, { useState, useEffect } from 'react'
import './Main.css'
import QuizAPI from '../assets/QuizAPI'
import Alert from '@mui/material/Alert';
import {Context} from './Context.jsx/Context'

function Main() {

  const[isStarted,SetIsStarted] = useState(true)
  const[QuestionNum,SetQuestionNum] = useState(0)
  const[isCorrect,SetIsCorrect] = useState(false)
  const[score,SetScore] = useState(0)
  const[initial,SetInitial] = useState('')


  const {counter, setCounter,isWrong,SetIsWrong,isGameEnd,SetGameEnd} = React.useContext(Context) 
  
  function handleStartQuiz() {
    SetIsStarted(false)
    setCounter(50)
  }


  function handleQuizAns(option){
    if(QuizAPI[QuestionNum].options[option] === QuizAPI[QuestionNum].answer && QuestionNum < QuizAPI.length && counter>0){
        SetIsCorrect(true)
        SetScore(score+10)
        setTimeout(() => {
            if(QuestionNum<4){
            SetQuestionNum(QuestionNum+1)
            }else if(QuestionNum==4){
                SetGameEnd(true)
            }
            SetIsCorrect(false)
          }, "1000")
        
    }else if(counter>0){
        SetIsWrong(true)
        setTimeout(() => {
            SetIsWrong(false)
          }, "1000")
    }else{
        SetGameEnd(true)
    }
  }

  function handleHighscores(){
    localStorage.setItem('initial',JSON.stringify(initial))
  }

  return (
    <div className='main'>
        <div className="mainbox">
        { (isStarted && !isGameEnd) &&  
        <div>
            <h1>Coding Quiz Challenge</h1>
            <p>Try to answer to the following code-related Questions within the time limit.</p>
            <p>
            Keep in mind that incorrect answers will penalize your score/time by ten seconds!
            </p>
            <button type="submit" onClick={handleStartQuiz}>Start Quiz</button>
        </div>        
         }

        { (!isStarted && !isGameEnd) && 
        <div className='quizBox'>
            <h4>{QuizAPI[QuestionNum].questionText}</h4>
            <button onClick={() => handleQuizAns(0)}>{QuizAPI[QuestionNum].options[0]}</button>
            <button onClick={() => handleQuizAns(1)}>{QuizAPI[QuestionNum].options[1]}</button>
            <button onClick={() => handleQuizAns(2)}>{QuizAPI[QuestionNum].options[2]}</button>
            <button onClick={() => handleQuizAns(3)}>{QuizAPI[QuestionNum].options[3]}</button>
            {isCorrect && <Alert severity="success">Correct</Alert>}
            {isWrong && <Alert severity="error">Incorrect</Alert>}
        </div>  
        }

        {
            isGameEnd &&
            <div className="gameEndBox">
                <h1>All Done!</h1>
                <p>Your Final Score is :{score}</p>
                <p>Enter Initials:</p>
                <input onChange={event => SetInitial(event.target.value)} type="text" name="initial" id="input" />
                <button type="submit" onClick={handleHighscores}>Submit</button>
            </div>
        }
        </div>
    </div>
  )
}

export default Main