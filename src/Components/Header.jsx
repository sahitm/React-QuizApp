import React from 'react'
import './Header.css'

function Header() {

    const [counter, setCounter] = React.useState(50);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);  


    return (
        <div className='header'>

            <div>
                <a id="leaderboard">View Highscores 
                <i class="fas fa-hand-point-left fa-lg"></i>
                </a>
            </div>
            
            <div>Time:{counter}</div>
            
        </div>
    )
}

export default Header