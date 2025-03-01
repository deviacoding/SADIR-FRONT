import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Etudiant = () => {
    const [data, setdata] = useState([]);

    // useEffect(() => {
    //     console.log("Hello je mouvre")
    //     axios.get('http://localhost:8000')
        
    //         .then(response => { 
    //             console.log(response.data)
    //             setdata(response.data)
    //         })
        
    //         .catch(error => console.log(error));
        
    // }, []);
    useEffect(() => {
        console.log("Hello je mouvre")
        axios.get('http://localhost:8000/usersMySql')
        
            .then(response => { 
                console.log(response.data)
                setdata(response.data.data)
            })
        
            .catch(error => console.log(error));
        
    }, []);
  return (
    <div>
        <h1>First useEffect</h1>
        {
            data?.map((student)=> (
                <div className=" m-3 p-2 rounded shadow-lg" key={student.id} >
                <div>
                    <h6>Name: {student.name}</h6>
                    <p>{student.email}</p>
                    <p>{student.role}</p>
                </div>
                <br />
                </div>
            ))
        }


    </div>
  )
}

export default Etudiant