 

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
 

const BookCard = ({ book, onDelete, isDeleting }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleEdit = () => navigate(`/bookform/${book._id}`);
  const handleDeleteClick = () => setShowConfirm(true);
  const handleCancel = () => setShowConfirm(false);
  const handleConfirm = () => {
    onDelete(book._id);
    setShowConfirm(false);
  };

  return (
    <>
    <div className="col-12 col-sm-6 col-md-4 mb-4">
  <div className="card book-card h-100 shadow-sm rounded-4 overflow-hidden bg-white ">
    
    {/* Image */}
   <div
  className="book-img-wrapper bg-light d-flex justify-content-center align-items-center p-2 mx-auto"
  style={{ width: "180px", height: "220px", borderRadius: "10px", backgroundColor: "#f0f0f0" }}
>
  <img
    src={book.coverimg || "https://cdn-icons-png.flaticon.com/512/189/189665.png"}
    alt={book.title}
    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
    onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/189/189665.png"; }}
  />
</div>



          {/* Card Content */}
          <div className="card-body  pb-4 px-4">
            <h5 className="fw-bold text-primary text-truncate">{book.title}</h5>
            <p className="text-muted small mb-1"><strong>Author:</strong> {book.author}</p>
            <p className="text-muted small mb-1"><strong>Genre:</strong> {book.genre}</p>
            <p className="text-muted small mb-1"><strong>Year:</strong> {book.year}</p>
          <p className=" text-muted small mb-2 ">
  <strong>Status:</strong>{" "}
  <span
    className={`badge rounded-pill px-2 
      ${book.status === "Available" ? "bg-success" : "bg-danger"}`}
  >
    {book.status}
  </span>
</p>

             {/* Buttons */}
            <div className="d-flex justify-content-between mt-2">
              <Button variant="outline-primary" size="sm" onClick={handleEdit} className="rounded-pill px-3">
                <i className="bi bi-pencil-square"></i>
              </Button>

              <Button
                variant="outline-danger"
                size="sm"
                onClick={handleDeleteClick}
                className="rounded-pill px-3"
                disabled={isDeleting}
              >
                {isDeleting ? <span className="spinner-border spinner-border-sm"></span> : <i className="bi bi-trash-fill"></i>}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showConfirm} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <strong>{book.title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="danger" onClick={handleConfirm}>Yes, Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookCard;
