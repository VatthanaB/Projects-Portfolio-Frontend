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
    // Create a grid layout that adjusts based on screen size
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
      {
        // Map over the array of books and create a BookSingleCard component for each one
        books.map((item) => (
          // The key prop is a unique identifier for each element in the list
          <BookSingleCard key={item._id} book={item} />
        ))
      }
    </div>
  );
};

// Export the BookCard component
export default BookCard;
