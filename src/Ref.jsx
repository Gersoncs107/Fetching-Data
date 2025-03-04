import { useRef, useEffect } from "react";

const ButtonComponent = () => {
    const buttonRef = useRef(null)

    return(
        <button ref={buttonRef}>Click Me!</button>
    )
}

export default ButtonComponent