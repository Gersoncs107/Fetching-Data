import { useRef, useEffect } from "react";

const ButtonComponent = () => {
    const buttonRef = useRef(null)

    useEffect(()=> {
        buttonRef.current.focus()
    }, [])

    return(
        <button ref={buttonRef}>Click Me!</button>
    )
}

export default ButtonComponent