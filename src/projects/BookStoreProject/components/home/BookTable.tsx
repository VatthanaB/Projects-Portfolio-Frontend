// Import necessary components and interfaces
import { MdOutlineDelete } from "react-icons/md"; // Import delete icon from react-icons
import { BsInfoCircle } from "react-icons/bs"; // Import info icon from react-icons
import { AiOutlineEdit } from "react-icons/ai"; // Import edit icon from react-icons
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import { Book } from "../../interfaces/bookInterface"; // Import Book interface

// Define the props for the BookTable component
interface BookTableProps {
  books: Book[]; // Array of books
}

// Define the BookTable component
const BookTable: React.FC<BookTableProps> = ({ books }) => {
  return (
    <div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th> // Column
            for book number
            <th className="border border-slate-600 rounded-md">Title</th> //
            Column for book title
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Author // Column for book author
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Publish Year // Column for book publish year
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>{" "}
            // Column for operations
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              {" "}
              // Unique key for each book row
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1} // Display book number
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.title} // Display book title
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.author} // Display book author
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.publishYear} // Display book publish year
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/book-store/details/${book._id}`}>
                    {" "}
                    // Link to book details page
                    <BsInfoCircle className=" text-2xl text-green-800" /> //
                    Info icon
                  </Link>
                  <Link to={`/book-store/edit/${book._id}`}>
                    {" "}
                    // Link to book edit page
                    <AiOutlineEdit className=" text-2xl text-yellow-600" /> //
                    Edit icon
                  </Link>
                  <Link to={`/book-store/delete/${book._id}`}>
                    {" "}
                    // Link to book delete page
                    <MdOutlineDelete className=" text-2xl text-red-800" /> //
                    Delete icon
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable; // Export BookTable component
