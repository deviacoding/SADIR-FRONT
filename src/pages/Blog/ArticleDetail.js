import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import {Link} from "react-router-dom"

const ArticleDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState(null)
    console.log("id", id)
    useEffect(() => {
      console.log("boom")
      axios.get(`http://localhost:8000/article/${id}`)
      .then((response)=> {
          console.log(response.data.data)
          setData(response.data.data)
      })
      .catch((err)=> {
          console.log(err)
      })

    }, [id])
    

    // on doit aller chercher juste un article dans la database avec tout ces details
  return (
    <div>ArticleDetail  

    <Link to="/Articles" className="btn btn-dark">Revenir en Arriere</Link>
        
        <div className="card">
            <div className="card-header">
                <h2>{data?.titre}</h2>
            </div>
            <div className="card-body">
                <img src={data?.photo} alt={data?.title} />
            </div>
            <p>{data?.content}</p>

        </div>
        
         </div>
  )
}

export default ArticleDetail