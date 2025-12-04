 import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // Add page
  const handleAdd = () => {
    navigate(`/bookform`);
  };

  // Search handler
  const handleSearch = (value) => {
    setInput(value);
    onSearch(value); // parent ko search value send karega
  };

  return (
    <>
      <div className="container py-2 bg-light mt-3">
        <div className="row align-items-center">
          
          {/* Logo */}
          <div className="col-4 col-sm-4 col-lg-4 mb-2 mb-sm-0">
            <h3 className="m-0 fw-bold">
              <img
                src="/public/stack-of-books.png"
                style={{ width: "30px", height: "30px", marginRight: "8px" }}
              />
             Library Admin
            </h3>
          </div>

          {/* search bar */}
          <div className="col-4 col-sm-4 col-lg-4 mb-2 mb-sm-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search books..."
              value={input}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {/* Add btn */}
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
