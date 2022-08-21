import React from 'react'
import './highscore.css'
import {useNavigate} from "react-router-dom"

function Highscore() {

  const scoreData = JSON.parse(localStorage.getItem('initial'))
  const homeNavigate = useNavigate();
  const hsElements = scoreData.map(post => <h5>{post.name}:{post.score}</h5> )

  function handlenavigate(){
    homeNavigate('/')
  }

  return (
    <div className='highscore'>
          <h1>Highscores</h1>
          {hsElements}
          <button onClick={handlenavigate}>Go Back</button>
    </div>
  )
}

export default Highscore