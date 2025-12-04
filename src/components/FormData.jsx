
/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, postBook, putBook } from "../api/bookService";
import Loader from "./Loader";

const BookForm = () => {
  const initialValues = {
    title: "",
    author: "",
    genre: "",
    year: "",
    status: "",
    coverimg: null,
  };

  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true); // loader true initially

  // Handle form field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Form validation
  const validate = () => {
  let newErrors = {};

  const title = form.title.trim();
  const author = form.author.trim();
  const genre = form.genre.trim();
  const year = form.year.trim();
  const status = form.status.trim();

  if (!title) newErrors.title = "Title is required";
  if (!author) newErrors.author = "Author is required";
  if (!genre) newErrors.genre = "Genre is required";

    if (!year) {
  newErrors.year = "Year is required";
} else if (isNaN(year)) {
  newErrors.year = "Year must be numeric";
} else if (Number(year) <= 0) {
  newErrors.year = "Year must be positive";
} else if (year.length > 4) {
  newErrors.year = "Year cannot be more than 4 digits";
}


  if (!status) newErrors.status = "Status is required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      if (!id) {
        await postBook(form);
        toast.success("Book Added Successfully!");
      } else {
        await putBook(id, form);
        toast.success("Book Updated Successfully!");
      }
      navigate("/");
    } catch (error) {
      console.log("Error:", error);
      toast.error("Failed to add/update book!");
    } finally {
      setLoading(false);
    }
  };

  // Fetch book data in edit mode
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);

        // Map API keys to form state keys
        setForm({
          title: data.title || "",
          author: data.author || "",
          genre: data.genre || "",
          year: data.year || "",
          status: data.status || "",
          coverimg: data.coverimg || null,
        });
      } catch (error) {
        console.log("Error fetching book", error);
        toast.error("Failed to fetch book data");
      } finally {
        setLoading(false); // loader stop after fetch
      }
    };

    if (id) fetchBook();
    else setLoading(false); // new book, no loader
  }, [id]);

  // Show loader until data is fetched
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Loader />
      </div>
    );
  }

  return (
     <div className="container mt-3 d-flex justify-content-center p-2">

      <div className="w-50">
        <h2 className=" text-center fw-bold">{!id ? "Add Book" : "Edit Book"}</h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-2">
            <label htmlFor="title" className="form-label fw-bold text-info ">Title</label>
            <input
              type="text"
              className="form-control text-truncate"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            {errors.title && <div className="text-danger small">{errors.title}</div>}
          </div>

          {/* Author */}
          <div className="mb-2">
            <label htmlFor="author" className="form-label fw-bold text-info">Author</label>
            <input
              type="text"
              className="form-control text-truncate"
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
            />
            {errors.author && <div className="text-danger small">{errors.author}</div>}
          </div>

          {/* Genre */}
          <div className="mb-2">
            <label htmlFor="genre" className="form-label fw-bold text-info">Genre</label>
            <input
              type="text"
              className="form-control text-truncate"
              id="genre"
              name="genre"
              value={form.genre}
              onChange={handleChange}
            />
            {errors.genre && <div className="text-danger small">{errors.genre}</div>}
          </div>

          {/* Year */}
          <div className="mb-2">
            <label htmlFor="year" className="form-label fw-bold text-info">Published Year</label>
            <input
              type="text"
              className="form-control text-truncate"
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
              maxLength={4}
           
            />
            {errors.year && <div className="text-danger small">{errors.year}</div>}
          </div>

          {/* Status */}
          <div className="mb-2">
            <label htmlFor="status" className="form-label fw-bold text-info">Status</label>
            <select
              className="form-select text-truncate"
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
            </select>
            {errors.status && <div className="text-danger small">{errors.status}</div>}
          </div>
        {/* url img */}
         <div className="mb-2">
            <label className="form-label fw-bold text-info">Cover Image URL</label>
            <input
              type="text"
              name="coverimg"
              value={form.coverimg || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Paste image URL (optional)"
            />
          </div>

          {/* Live Preview */}
          {form.coverimg && (
            <div className="text-center mb-3">
              <img
                src={form.coverimg}
                alt="Preview"
                style={{ width: "140px", height: "180px", objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2 mt-4 ">
            <button type="submit" className="btn btn-primary btn-sm">
              {!id ? "Add Book" : "Update Book"}
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
