import React, {useState, useEffect} from 'react'
import axios from "axios"

const FetchUsers = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState();

    useEffect(() => {
        console.log("Mon component est monté")
        axios.get("http://localhost:8000/usersMySql")
        .then((response) => {
            console.log(response.data.data)
            setData(response.data.data)
        })
        .catch((error) => {
            console.log("error", error)
            setError("Une erreur est survenu")
        } )
    }, [])

  return (
    <div className="container">
        <h1>FetchUsers</h1>
        <div>
            {data.map((user) => (
                <div className="border border-dark rounded shadow-lg m-2 p-2" key={user.id}>
                    <h2>Email : {user.email}</h2>
                    <p>Name : {user.name}</p>
                    <p>Name : {user.role}</p>
                    <p>Password : {user.pwd}</p>
                </div>
            ))}
            {
                error && (
                    <div>{error}</div>
                )

            }
        </div>
        


    </div>
  )
}

export default FetchUsers