import BookCard from "../../components/BookCard";

const books = [
  {
    id: 1,
    title: "Ek Samandar, Mere Andar",
    author: "	Sanjeev Joshi",
    genre: "Dystopian",
    year: 1949,
    status: "Issued",
    coverimg: "/src/assets/image.png",
  },
  {
    id: 2,
    title: "Mere Andar Dystopian",
    author: "	Shubhra Gupta	",
    genre: "Dystopian",
    year: 1997,
    status: "Available",
    coverimg: "/src/assets/book.png",
  },
  {
    id: 3,
    title: "Ek Samandar, Mere Andar",
    author: "	Sanjeev Joshi",
    genre: "Dystopian",
    year: 1949,
    status: "Issued",
    coverimg: "/src/assets/book.png",
  },
  {
    id: 4,
    title: "Dystopian",
    author: "	Shubhra Gupta	Shubhra Gupta",
    genre: "Dystopian",
    year: 1997,
    status: "Available",
    coverimg: "/src/assets/book.png",
  },
  {
    id: 5,
    title: "Ek Samandar, Mere Andar",
    author: "	Sanjeev Joshi",
    genre: "Dystopian",
    year: 1949,
    status: "Issued",
    coverimg: "/src/assets/book.png",
  },
  {
    id: 6,
    title: "Sanjeev Joshi",
    author: "	Shubhra Gupta	Shubhra Gupta",
    genre: "Sanjeev Joshi",
    year: 1997,
    status: "Available",
    coverimg: "/src/assets/book.png",
  },
];

export default function DashBoard() {
  return (
    <div className="container mt-3">
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
