import { useEffect, useState } from "react";
import { getBooks } from "../../api/bookService";
import BookCard from "../../components/BookCard";

export default function DashBoard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchBooks();
  }, []);



  // get api  .....
  const fetchBooks = async () => {
    try {
      const response =  await getBooks();
      if(response && response?.length>0){
        setBooks(response)
      }
      console.log(response, "Response");
    } catch (err) {
      console.log("Error", err);
    }
    // finally{

    // }
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
