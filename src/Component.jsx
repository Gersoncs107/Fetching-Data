import { useState, useEffect } from "react"

const Component = ()=>{
    const [data, setData] = useState()

    useEffect(()=> {
        // fetch data
        const dataFetch = async ()=> {
             const data = await(
            await fetch('https://run.mocky.io/v3/d6155d63-938f-484c-8d87-6f918f126cd4')
        ).json()
        // set state when the data received
        setData(data)
        }
       dataFetch()
    }, [])
}