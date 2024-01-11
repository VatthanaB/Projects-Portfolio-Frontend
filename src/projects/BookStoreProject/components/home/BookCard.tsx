// Import the BookSingleCard component
import BookSingleCard from "./BookSingleCard";

// Import the Book interface from the bookInterface file
import { Book } from "../../interfaces/bookInterface";

// Define the props for the BookCard component
interface BookCardProps {
  books: Book[]; // An array of books
}

// Define the BookCard component
const BookCard: React.FC<BookCardProps> = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

// Export the BookCard component
export default BookCard;
