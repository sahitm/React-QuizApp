import {React, useState, createContext} from 'react'

const Context = createContext()

function ContextProvider(props) {

    const [counter, setCounter] = useState(null);
    const[isWrong,SetIsWrong] = useState(false)
    const[isGameEnd,SetGameEnd] = useState(false)
    console.log('LS2')
    
    const[hsArray,SetHsArray] = useState(JSON.parse(localStorage.getItem('initial')))

    return (
        <Context.Provider value={{counter, setCounter,isWrong,SetIsWrong,isGameEnd,SetGameEnd,hsArray,SetHsArray}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}