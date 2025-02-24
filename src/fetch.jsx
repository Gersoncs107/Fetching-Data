import { useEffect, useState } from "react";

const Image = () => {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect( ()=> {
        fetch("https://jsonplaceholder.typicode.com/photos", {mode: "cors"})
        .then((response)=> response.json())
        .then((response)=> setImageUrl(response[0].url))
        .catch((error)=> console.error(error))

    }, [])

    return(

    )
}

export default Image