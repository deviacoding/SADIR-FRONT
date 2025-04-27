import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Articles = () => {
    const [dataArticles, setDataArticles] = useState([])
    useEffect(() => {
      console.log("je suis pret a faire une action puisque je me suis declencher a l'ouverture")
        axios.get('http://localhost:8000/articles')
        .then((response)=> {
            console.log(response.data.data)
            setDataArticles(response.data.data)
        })
        .catch((err)=> {
            console.log(err)
        })

    }, [])
    
  return (
    <div>
        <h1>Artcles</h1>
        <div className="container">
            <div className="row">
                { 
                    dataArticles.map((article)=> (
                        <div key={article.id} className="col-md-4 mb-4">
                            <Link to={`/ArticleDetail/${article.id}`}>
                                <h2>{article.titre}</h2>
                                <p>{article.intro}</p>
                                <img className="img-fluid mb-3 rounded" src={article.photo}  alt={article.titre} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>



    </div>
  )
}

export default Articles