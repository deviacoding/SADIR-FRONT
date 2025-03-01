import React, {useEffect, useState} from 'react'
import axios from 'axios';

const FirstUseEffect = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        console.log("Hello je mouvre")
        axios.get('https://jsonplaceholder.typicode.com/posts')
        
            .then(response => { 
                console.log(response.data)
                setdata(response.data)
            })
        
            .catch(error => console.log(error));
        
    }, []);


  return (
    <div>
        <h1>First useEffect</h1>
        {
            data?.map((post)=> (
                <div key={post.id} >
                <div>
                    <h6>Title: {post.title}</h6>
                    <p>{post.body}</p>
                </div>
                <br />
                </div>
            ))
        }


    </div>
  )
}

export default FirstUseEffect