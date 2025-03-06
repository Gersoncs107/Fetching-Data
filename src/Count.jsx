import { useState } from "react"

const CountButton = ({onClick, count}){
    return(
        <button onClick={onClick}>{count}</button>
    )
}

const DualCounter = () => {
    const [count1, setCount1] = useState(0)
    const increase = () => setCount1(c => c + 1)

    const [count2, setCount2] = useState(0)
    const decrease = () => setCount2(c => c - 1)

    return(
        <div>
            <CountButton count={count1} onClick={increase}/>
            <CountButton count={count2} onClick={decrease}/>
        </div>
    )
}

