import React, {useState, useEffect} from 'react'
import axios from "axios"

const FetchJsonPlaceHolder = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log("Mon component est monté")
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.data)
            setData(response.data)
        })
        .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        console.log("Mon component est monté")
    }, [data])

    


  return (
    <div className="container">
        <h1>FetchJsonPlaceHolder</h1>
        <div>
            {data.map((item) => (
                <div className="border border-dark rounded shadow-lg m-2 p-2" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
        


    </div>
  )
}

export default FetchJsonPlaceHolder