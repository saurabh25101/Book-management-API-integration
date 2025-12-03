// /* eslint-disable react-hooks/immutability */

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getBookById, postBook, putBook } from "../api/bookService";
// import Loader from "./Loader";
// import { toast } from 'react-hot-toast';



// const BookForm = () => {
//   const initialValues = {
//     title: "",
//     author: "",
//     genre: "",
//     year: "",
//     status: "",
//     coverimg: null,
//   };
//   const navigate = useNavigate();

//   const [form, setForm] = useState(initialValues);
//   const [errors, setErrors] = useState({});
//   //  here we create state for loader 
//   const [loading, setLoading] = useState(false);
  
 


//   const { id } = useParams();
//   console.log(id, "Id");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!form.title.trim()) newErrors.title = "Title is required";
//     if (!form.author.trim()) newErrors.author = "Author is required";
//     if (!form.genre.trim()) newErrors.genre = "Genre is required";

//     if (!form.year.trim()) newErrors.year = "Year is required";
//     else if (isNaN(form.year)) newErrors.year = "Year must be numeric";
//     else if (form.year.length < 4)
//       newErrors.year = "Year must be at least 4 digits";

//     if (!form.status.trim()) newErrors.status = "Status is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

 
 
//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (validate()) {
//     setLoading(true); // loader start

//     try {
//       if (!id) {
//         // Add 
//         await postBook(form);
//         toast.success("Book Added Successfully!");
//       } else {
//         // Update
//         await putBook(id, form);
//         toast.success("Book Updated Successfully!");
//       }

//       navigate("/"); // route change after toast trigger

//     } catch (error) {
//       console.log("Error:", error);
//       toast.error("Failed to add/update book!");
//     } finally {
//       setLoading(false); // loader stop in both success and error
//     }
//   }
// };




//   // for data edit hear we get the details of book
//   useEffect(() => {
//     if (id) {
//       fetchBook();
//     }
//   }, [id]);

//   const fetchBook = async () => {
//     try {
//       const data = await getBookById(id);
//       setForm(data);
//     } catch (eroor) {
//       console.log("Error fetching book", eroor);
     
//     }
   
//   };
 

//   return (

//     <div className="container mt-4 d-flex justify-content-center ">
          
//       <div className="w-50 h-25">
//         <h2 className="mb-4 text-center fw-bold ">
        
//           {!id ? "Add Book" : "Edit Book"}
//         </h2>
//            {loading ? (
//       <div className="d-flex justify-content-center align-items-center" style={{height: "100px"}}>
//         <Loader />
//       </div>
//     ) :


//         <form onSubmit={handleSubmit}>
//           {/* Title */}
//           <div className="mb-">
//             <label htmlFor="title" className="form-label fw-bold text-info ">
//               Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="title"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//             />
//             {errors.title && (
//               <div className="text-danger small">{errors.title}</div>
//             )}
//           </div>

//           {/* Author */}
//           <div className="">
//             <label htmlFor="author" className="form-label fw-bold  text-info">
//               Author
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="author"
//               name="author"
//               value={form.author}
//               onChange={handleChange}
//             />
//             {errors.author && (
//               <div className="text-danger small">{errors.author}</div>
//             )}
//           </div>

//           {/* Genre */}
//           <div className="">
//             <label htmlFor="genre" className="form-label fw-bold  text-info">
//               Genre
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="genre"
//               name="genre"
//               value={form.genre}
//               onChange={handleChange}
//             />
//             {errors.genre && (
//               <div className="text-danger small">{errors.genre}</div>
//             )}
//           </div>

//           {/* Year */}
//           <div className="">
//             <label htmlFor="year" className="form-label fw-bold  text-info">
//               Published Year
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="year"
//               name="year"
//               value={form.year}
//               onChange={handleChange}
//             />
//             {errors.year && (
//               <div className="text-danger small">{errors.year}</div>
//             )}
//           </div>

//           {/* Status */}
//           <div className="">
//             <label htmlFor="status" className="form-label fw-bold  text-info">
//               Status
//             </label>
//             <select
//               className="form-select"
//               id="status"
//               name="status"
//               value={form.status}
//               onChange={handleChange}
//             >
//               <option value="">Select Status</option>
//               <option value="Available">Available</option>
//               <option value="Issued">Issued</option>
//             </select>
//             {errors.status && (
//               <div className="text-danger small">{errors.status}</div>
//             )}
//           </div>

//           {/* Buttons */}
//           <div className="d-flex justify-content-end gap-2 mt-4">
//             <button type="submit" className="btn btn-primary btn-sm">
//               {!id ? "Add Book" : "Update Book"}
//             </button>
            

//             <button
//               type="button"
//               className="btn btn-secondary btn-sm"
//               onClick={() => navigate("/")}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
// }
//       </div>
//     </div>
   
//   );
// };

// export default BookForm;

//     // Delete book
  





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

    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.author.trim()) newErrors.author = "Author is required";
    if (!form.genre.trim()) newErrors.genre = "Genre is required";

    if (!form.year.trim()) newErrors.year = "Year is required";
    else if (isNaN(form.year)) newErrors.year = "Year must be numeric";
    else if (form.year.length < 4) newErrors.year = "Year must be at least 4 digits";

    if (!form.status.trim()) newErrors.status = "Status is required";

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
    <div className="container mt-4 d-flex justify-content-center">
      <div className="w-50">
        <h2 className="mb-4 text-center fw-bold">{!id ? "Add Book" : "Edit Book"}</h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label fw-bold text-info">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            {errors.title && <div className="text-danger small">{errors.title}</div>}
          </div>

          {/* Author */}
          <div className="mb-3">
            <label htmlFor="author" className="form-label fw-bold text-info">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
            />
            {errors.author && <div className="text-danger small">{errors.author}</div>}
          </div>

          {/* Genre */}
          <div className="mb-3">
            <label htmlFor="genre" className="form-label fw-bold text-info">Genre</label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              value={form.genre}
              onChange={handleChange}
            />
            {errors.genre && <div className="text-danger small">{errors.genre}</div>}
          </div>

          {/* Year */}
          <div className="mb-3">
            <label htmlFor="year" className="form-label fw-bold text-info">Published Year</label>
            <input
              type="text"
              className="form-control"
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
            />
            {errors.year && <div className="text-danger small">{errors.year}</div>}
          </div>

          {/* Status */}
          <div className="mb-3">
            <label htmlFor="status" className="form-label fw-bold text-info">Status</label>
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
            {errors.status && <div className="text-danger small">{errors.status}</div>}
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2 mt-4">
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
