import { useRef, useEffect } from "react";

const ButtonComponent = () => {
    const buttonRef = useRef(null)

    useEffect(()=> {
        buttonRef.current.focus()
        buttonRef.current.textContent = "Hey, I'm different!"
    }, [])

    return(
        <button ref={buttonRef}>Click Me!</button>
    )
}

export default ButtonComponent