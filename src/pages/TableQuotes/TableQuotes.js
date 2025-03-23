import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TableQuotes = () => {
  const [data, setData] = useState([]);
  const [editingQuote, setEditingQuote] = useState(null); // For editing

  const [showModal, setShowModal] = useState(false); // For modal visibility
  const [newQuote, setNewQuote] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    status: "",
    commentaire: "",
  });

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    axios
      .get("http://localhost:8001/quotes")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8001/quotes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          fetchQuotes(); // Re-fetch data after deletion
        } else {
          console.error("Failed to delete the quote");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (quote) => {
    setEditingQuote(quote); // Set the quote to be edited
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8001/quotes/${editingQuote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingQuote),
    })
      .then((response) => {
        if (response.ok) {
          fetchQuotes(); // Re-fetch data after update
          setEditingQuote(null); // Close the editing form
        } else {
          console.error("Failed to update the quote");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuote),
    })
      .then((response) => {
        if (response.ok) {
          fetchQuotes(); // Re-fetch data after creation
          setShowModal(false); // Close the modal
          setNewQuote({
            name: "",
            email: "",
            phone: "",
            service: "",
            status: "",
            commentaire: "",
          }); // Reset the form
        } else {
          console.error("Failed to create the quote");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Table Quotes</h1>

      <Button className="mb-3" onClick={() => setShowModal(true)}>
        Ajouter un devis
      </Button>

      {/* Modal for creating a new quote */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Créer un nouveau devis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleCreate}>
            <div className="form-group mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                value={newQuote.name}
                onChange={(e) =>
                  setNewQuote({ ...newQuote, name: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={newQuote.email}
                onChange={(e) =>
                  setNewQuote({ ...newQuote, email: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Phone:</label>
              <input
                type="text"
                className="form-control"
                value={newQuote.phone}
                onChange={(e) =>
                  setNewQuote({ ...newQuote, phone: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Service:</label>
              <input
                type="text"
                className="form-control"
                value={newQuote.service}
                onChange={(e) =>
                  setNewQuote({ ...newQuote, service: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Status:</label>
              <select
                className="form-control"
                value={newQuote.status}
                onChange={(e) =>
                  setNewQuote({ ...newQuote, status: e.target.value })
                }
              >
                <option value="new">New</option>
                <option value="rappeler">Rappeler</option>
                <option value="nrp">NRP</option>
                <option value="signe">Signé</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Commentaire:</label>
              <textarea
                className="form-control"
                rows="3"
                value={newQuote.commentaire}
                onChange={(e) =>
                  setNewQuote({ ...newQuote, commentaire: e.target.value })
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
                onClick={() => setShowModal(false)}
              >
                Annuler
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {editingQuote && (
        <div className="card m-4">
          <div className="card-header bg-primary text-white">
            <h2 className="h5 mb-0">Modifier le devis</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleUpdate}>
              <div className="form-group mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={editingQuote.name}
                  onChange={(e) =>
                    setEditingQuote({ ...editingQuote, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={editingQuote.email}
                  onChange={(e) =>
                    setEditingQuote({ ...editingQuote, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Phone:</label>
                <input
                  type="text"
                  className="form-control"
                  value={editingQuote.phone}
                  onChange={(e) =>
                    setEditingQuote({ ...editingQuote, phone: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Service:</label>
                <input
                  type="text"
                  className="form-control"
                  value={editingQuote.service}
                  onChange={(e) =>
                    setEditingQuote({
                      ...editingQuote,
                      service: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Status:</label>
                <select
                  className="form-control"
                  value={editingQuote.status}
                  onChange={(e) =>
                    setEditingQuote({ ...editingQuote, status: e.target.value })
                  }
                >
                  <option value="new">New</option>
                  <option value="rappeler">Rappeler</option>
                  <option value="nrp">NRP</option>
                  <option value="signe">Signé</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Commentaire:</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={editingQuote.commentaire || ""}
                  onChange={(e) =>
                    setEditingQuote({
                      ...editingQuote,
                      commentaire: e.target.value,
                    })
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
                  onClick={() => setEditingQuote(null)}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Status</th>
            <th>Commentaire</th>
            <th>Date de creation</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((quote, index) => (
            <tr key={quote.id}>
              <td>{index + 1}</td>
              <td>{quote.name}</td>
              <td>{quote.email}</td>
              <td>{quote.phone}</td>
              <td>{quote.service}</td>
              <td>{quote.status}</td>
              <td>{quote.commentaire || "N/A"}</td>
              <td>{new Date(quote.created_at).toLocaleDateString()}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(quote)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(quote.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableQuotes;
