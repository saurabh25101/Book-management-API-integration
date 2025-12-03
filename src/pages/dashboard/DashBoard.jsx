
import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../../api/bookService";
import BookCard from "../../components/BookCard";
import toast from "react-hot-toast";
import Navbar from "/src/pages/Navbar.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function DashBoard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null); // for delete loader
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      if (response && response.length > 0) {
        setBooks(response);
      }
    } catch (err) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingId(id); // start loader for that card   deletig

    try {
      await deleteBook(id);

      setBooks((prev) => prev.filter((book) => book._id !== id));

      toast.success("Book deleted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete book!");
    } finally {
      setDeletingId(null); // stop loader
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.genre.toLowerCase().includes(search.toLowerCase())
  );

  const SkeletonCard = () => (
    <div className="col-12 col-sm-6 col-md-4 mb-3">
      <div className="card h-100 shadow-sm border-0 rounded-3 p-2">
        <Skeleton height={200} />
        <h3 className="mt-2"><Skeleton width="80%" /></h3>
        <p><Skeleton count={3} /></p>
      </div>
    </div>
  );

  return (
    <>
      <Navbar onSearch={(text) => setSearch(text)} />

      <div className="container mt-3">
        <h3 className="mb-3 text-center text-black fs-1">
    {books.length > 0 ? "Our Collection" : "No Books Found"}
  </h3>


        <div className="row">

          {/* Skeletons while loading */}
          {loading &&
            Array(6).fill(0).map((_, idx) => <SkeletonCard key={idx} />)
          }

          {/* Data loaded */}
          {!loading && filteredBooks.length > 0 &&
            filteredBooks.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                onDelete={handleDelete}
                isDeleting={deletingId === book._id} // send deleting state
              />
            ))
          }

          {/* No books found */}
          {!loading && filteredBooks.length === 0 && (
            <h2 className="text-center fw text-warning mt-5">
              No Books Found
            </h2>
          )}

        </div>
      </div>
    </>
  );
}
