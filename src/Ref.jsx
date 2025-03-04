import { useRef, useEffect } from "react";

const ButtonComponent = () => {
    const buttonRef = useRef(null)

    useEffect(()=> {
        buttonRef.current.focus()
        buttonRef.current.textContent = "Hey, I'm different!"
        let temeout = setTimeout(()=> {
            buttonRef.current.textContent = "Click Me!"
        }, 2000)
        
        return () => {
            clearTimeout(timeout)
        }

    }, [])

    return(
        <button ref={buttonRef}>Click Me!</button>
    )
}

export default ButtonComponent