
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookForm=()=> {
  const initialValues = {
    title: "",
    author: "",
    genre: "",
    year: "",
    status: "",
    coverimg: null,
  };
   const navigate = useNavigate();

  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const {id} = useParams();
  console.log(id, "Id");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.author.trim()) newErrors.author = "Author is required";
    if (!form.genre.trim()) newErrors.genre = "Genre is required";

    if (!form.year.trim()) newErrors.year = "Year is required";
    else if (isNaN(form.year)) newErrors.year = "Year must be numeric";
    else if (form.year.length < 4)
      newErrors.year = "Year must be at least 4 digits";

    if (!form.status.trim()) newErrors.status = "Status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if(id!=="null"){
    //   projectUpdate()
    // }
    // else{
    //   addEventListener()
    // }

    if (validate()) {
      alert("Book Added Successfully!");
    }
  };
  


  return (
    <div className="container mt-4 d-flex justify-content-center ">
      <div className="w-50 h-25">
        <h2 className="mb-4 text-center fw-bold ">{id=="null" ?"Add Book":"Edit Book"}</h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-">
            <label htmlFor="title" className="form-label fw-bold text-info ">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            {errors.title && (
              <div className="text-danger small">{errors.title}</div>
            )}
          </div>

          {/* Author */}
          <div className="">
            <label htmlFor="author" className="form-label fw-bold  text-info">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
            />
            {errors.author && (
              <div className="text-danger small">{errors.author}</div>
            )}
          </div>

          {/* Genre */}
          <div className="">
            <label htmlFor="genre" className="form-label fw-bold  text-info">
              Genre
            </label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              value={form.genre}
              onChange={handleChange}
            />
            {errors.genre && (
              <div className="text-danger small">{errors.genre}</div>
            )}
          </div>

          {/* Year */}
          <div className="">
            <label htmlFor="year" className="form-label fw-bold  text-info">
              Published Year
            </label>
            <input
              type="text"
              className="form-control"
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
            />
            {errors.year && (
              <div className="text-danger small">{errors.year}</div>
            )}
          </div>

          {/* Status */}
          <div className="">
            <label htmlFor="status" className="form-label fw-bold  text-info">
              Status
            </label>
            <select
              className="form-select"
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
            </select>
            {errors.status && (
              <div className="text-danger small">{errors.status}</div>
            )}
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2 mt-4">
            <button type="submit" className="btn btn-primary btn-sm">
              {id!=="null" ?"Update Book":"Add Book"}
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
          onClick={() => navigate("/")}

            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm