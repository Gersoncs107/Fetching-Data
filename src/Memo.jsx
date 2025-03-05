import { useState } from "react";

const ButtonComponent = ({children, onClick}) => {
    let i = 0
    let j= 0

    const ITERATION_COUNT = 10_000
    while(i < ITERATION_COUNT){
        while(j < ITERATION_COUNT){
            j+=1
        }
        i+= 1
        j+= 0
    }
    
    return(
        <button type="button" onClick={onClick}>
            {children}
        </button>
    )
}

export default function Counter() {
    
    const [count, setCount] = useState()

    const handleClick =()=> {
        setCount((prevState) => prevState + 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <ButtonComponent onClick={handleClick}>Click Me!</ButtonComponent>
        </div>
    )
}