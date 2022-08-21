import React from 'react'
import './Header.css'
import {Context} from './Context.jsx/Context'
import {useNavigate} from "react-router-dom"

function Header() {

    const hsNavigate = useNavigate();

    const {counter, setCounter,isWrong,SetIsWrong,isGameEnd,SetGameEnd} = React.useContext(Context)
 
    function handlehs(){
        hsNavigate('/highscore')
    }
        

    React.useEffect(() => {
        counter > 0 && setTimeout(() => isWrong ? setCounter(counter - 10) : setCounter(counter - 1) , 1000)
      }, [counter])


    return (
        <div className='header'>

            <div onClick={handlehs}>
                <a id="leaderboard">View Highscores 
                <i className="fas fa-hand-point-left fa-lg"></i>
                </a>
            </div>
            
            <div className='timercounter'>Time:{isGameEnd ? "over" : counter}</div>
            
        </div>
    )
}

export default Header