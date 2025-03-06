import { useState } from "react"

const DualCounter = () => {
    const [count1, setCount1] = useState(0)
    const increase = () => setCount1(c => c + 1)

    const [count2, setCount2] = useState(0)
    const decrease = () => setCount2(c => c - 1)
}

