import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${id}`)
      .then((response) => {
        setArticle(response.data.data[0]);
      })
      .catch((error) => {
        console.error("There was an error fetching the article!", error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <Link to="/articles" className="btn btn-light mb-3">
        Retourner
      </Link>
      <div className="card">
        <div className="card-header">
          <h2>{article.titre}</h2>
        </div>
        <div className="card-body">
          <img
            src={article.photo}
            alt={article.titre}
            className="img-fluid mb-3 rounded"
          />
          <p className="card-text">{article.content}</p>
        </div>
        <div className="card-footer text-muted">
          Published on:{" "}
          {new Date(article.date_publication).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Blog;
