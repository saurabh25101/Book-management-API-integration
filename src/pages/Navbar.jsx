import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(`/bookform/null`);
  };
  return (
    <>
      <div className="container py-2 bg-light mt-3 ">
        <div className="row align-items-center">
          <div className="col-4 col-sm-4 col-lg-4 mb-2 mb-sm-0">
            <h3 className="m-0 fw-bold ">
              <img
                src="/src/assets/stack-of-books.png"
                style={{ width: "30px", height: "30px", marginRight: "8px" }}
              />
              BOOK ADMIN
            </h3>
          </div>

          <div className="col-4 col-sm-4 col-lg-4 mb-2 mb-sm-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search books..."
            />
          </div>

          <div className="col-4 col-sm-4 col-lg-4 px-5 d-flex justify-content-center justify-content-sm-end">
            <button className="btn btn-primary btn-sm" onClick={handleAdd}>
              Add Books
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
