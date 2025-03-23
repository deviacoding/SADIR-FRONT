import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/articles")
      .then((response) => {
        console.log(response.data.data);
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the articles!", error);
      });
  }, []);

  return (
    <div>
      <h1>AllArticles</h1>
      <div className="container mt-5">
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-md-4 mb-4">
              {/* Wrap the entire card in a Link */}
              <Link
                to={`/blog/${article.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
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
                    <p className="card-text">{article.intro}</p>
                  </div>
                  <div className="card-footer text-muted">
                    Published on:{" "}
                    {new Date(article.date_publication).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;