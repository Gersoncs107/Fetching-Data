import { useEffect, useState } from "react";

const useImageUrl = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if(response.status >= 400) {
            throw new Error("Server Error")
        }
        return response.json()
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => console.error(error))
      .finally(()=> setLoading(false))
  }, []);

    
  return {imageURL, error, loading}
};

const Image = ()=> {
  const {imageURL, error, loading} = useImageUrl()

  if(loading) return <p>Loading...</p>
  if(error) return <p>A network error was encountered</p> 

  return(
    <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
  )
}

export default Image;
