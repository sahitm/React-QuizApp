import {React, useState, createContext} from 'react'

const Context = createContext()

function ContextProvider(props) {

    const [counter, setCounter] = useState(null);
    const[isWrong,SetIsWrong] = useState(false)
    const[isGameEnd,SetGameEnd] = useState(false)

    return (
        <Context.Provider value={{counter, setCounter,isWrong,SetIsWrong,isGameEnd,SetGameEnd}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}