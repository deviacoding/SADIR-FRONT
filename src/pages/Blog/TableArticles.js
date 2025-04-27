import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import axios from "axios";

const TableArticles = () => {
  const objArticle = {
    titre: "",
    intro: "",
    content: "",
    photo: "",
    categorie: "",
    date_publication: "",
  };
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [newArticle, setnewArticle] = useState(objArticle);
  const [editingArticle, seteditingArticle] = useState(null);

  let serverAddress = "http://localhost:8000";

  //   console.log("newArticle", newArticle);

  const handleClose = () => {
    setShow(false);
    setnewArticle(objArticle);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line 
  }, []);

  const fetchArticles = () => {
    axios
      .get(`${serverAddress}/articles`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        // console.log("error", error);
        setError("Une erreur est survenu");
      });
  };

  const handleDelete = (id) => {
    console.log("handleDelete id", id);
    const confirmDelete = window.confirm("Es tu sur de vouloir supprimer ? ");

    if (confirmDelete === true) {
      axios
        .delete(`${serverAddress}/article/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          console.log(response.data);
          alert("votre article a ete supprimer avec succes");
          fetchArticles();
        })
        .catch((error) => {
          console.log("error", error);
          setError("Une erreur est survenu");
        });
    } else {
      alert("tant pis");
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    // console.log("handeCreate sans refraichsissement", newArticle);
    axios
      .post(`${serverAddress}/article`, newArticle, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data.data);
        // console.log(response.data);
        alert("votre article a ete ajouter avec succes");
        fetchArticles();
        handleClose();
        setnewArticle(objArticle);
      })
      .catch((error) => {
        console.log("error", error);
        setError("Une erreur est survenu");
      });
  };

  const handleEdit = (article) => {
    console.log("handleUpdate open", article);
    seteditingArticle(article);
  };

  const handleUpdate = () => {
    console.log("handleUpdate open", editingArticle);
    axios
      .put(`${serverAddress}/article`, editingArticle, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        console.log(response.data);
        alert("votre article a ete modifier avec succes");
        fetchArticles();
        seteditingArticle(null);
      })
      .catch((error) => {
        console.log("error", error);
        setError("Une erreur est survenu");
      });
    // faire mon axios
  };

  return (
    <>
      <div className="container">
        <Button variant="primary" onClick={handleShow}>
          Ajouter un Article
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Ajouter un Article</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ici mon super modal
            <form onSubmit={handleCreate}>
              <div className="form-group mb-3">
                <label className="form-label">Titre:</label>
                <input
                  type="text"
                  className="form-control"
                  value={newArticle.titre}
                  onChange={(e) =>
                    setnewArticle({ ...newArticle, titre: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Intro:</label>
                <input
                  type="text"
                  className="form-control"
                  value={newArticle.intro}
                  onChange={(e) =>
                    setnewArticle({ ...newArticle, intro: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">photo:</label>
                <input
                  type="text"
                  className="form-control"
                  value={newArticle.photo}
                  onChange={(e) =>
                    setnewArticle({ ...newArticle, photo: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">date_publication:</label>
                <input
                  type="date"
                  className="form-control"
                  value={newArticle.date_publication}
                  onChange={(e) =>
                    setnewArticle({
                      ...newArticle,
                      date_publication: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">categorie:</label>
                <select
                  className="form-control"
                  value={newArticle.categorie}
                  onChange={(e) =>
                    setnewArticle({ ...newArticle, categorie: e.target.value })
                  }
                >
                  <option value="new">New</option>
                  <option value="Technologie">Technologie</option>
                  <option value="frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Content:</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={newArticle.content}
                  onChange={(e) =>
                    setnewArticle({ ...newArticle, content: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary me-2">
                  Enregistrer
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleClose()}
                >
                  Annuler
                </button>
              </div>
            </form>
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Modal>

        <Button variant="warning" onClick={() => fetchArticles()}>
          Raffraichir
        </Button>

        {editingArticle && (
          <>
            <div className="card m-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Modifier l'article</h2>
              </div>
              <div className="card-body">
                <div className="form-group mb-3">
                  <label className="form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingArticle.titre}
                    onChange={(e) =>
                      seteditingArticle({
                        ...editingArticle,
                        titre: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Intro:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingArticle.intro}
                    onChange={(e) =>
                      seteditingArticle({
                        ...editingArticle,
                        intro: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Photo:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingArticle.photo}
                    onChange={(e) =>
                      seteditingArticle({
                        ...editingArticle,
                        photo: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Categorie:</label>
                  <select
                    className="form-control"
                    value={editingArticle.categorie}
                    onChange={(e) =>
                      seteditingArticle({
                        ...editingArticle,
                        categorie: e.target.value,
                      })
                    }
                  >
                    <option value="new">New</option>
                    <option value="Technologie">Technologie</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">content:</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={editingArticle.content || ""}
                    onChange={(e) =>
                      seteditingArticle({
                        ...editingArticle,
                        content: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={() => handleUpdate()}
                    className="btn btn-primary me-2"
                  >
                    Enregistrer
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => seteditingArticle(null)}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>titre</th>
              <th>intro</th>
              <th>photo</th>
              <th>categorie</th>
              <th>date_publication</th>
              <th>delete</th>
              <th>update</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((article, index) => (
              <tr key={index}>
                <td>{article.id}</td>
                <td>{article.titre}</td>
                <td>{article.intro}</td>
                <td>{article.photo}</td>
                <td>{article.categorie}</td>
                <td>{article.date_publication}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(article.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleEdit(article)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {error && <div>{JSON.stringify(error)}</div>}
      </div>
    </>
  );
};

export default TableArticles;
