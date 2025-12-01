const BookCard = ({ book }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-3  ">
      <div className="card h-100 shadow " >  
        <img
          src={book.coverimg}
          className="card-img mt-3 mx-5"
          alt={book.title}
          style={{ height: "200px", width: "200px" }}  
        />

        <div className="card-body p-2 px-5 pb-4">  
          <h6 className="card-title mb-1 fw-bold text-info fs-5">{book.title}</h6>  
          <p className="card-text mb-1 small"> <strong>Author: </strong>{book.author}</p>
          <p className="card-text mb-1 small"> <strong>Genre:</strong> {book.genre}</p>
          <p className="card-text mb-1 small"> <strong>Year: </strong>{book.year}</p>

          <span>{book.status}</span>

          <div className="d-flex justify-content-between mt-2">
            <button className="btn btn-primary btn-sm"><i class="bi bi-pencil p-2 "></i></button>
            <button className="btn btn-danger btn-sm"><i class="bi bi-trash3-fill p-2"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
