import BookSingleCard from "./BookSingleCard";

import { Book } from "../../interfaces/bookInterface";

interface BookCardProps {
  books: Book[];
}
const BookCard: React.FC<BookCardProps> = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BookCard;
