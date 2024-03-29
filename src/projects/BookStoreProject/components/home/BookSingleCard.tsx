// Import necessary components and interfaces
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import { PiBookOpenTextLight } from "react-icons/pi"; // Import book icon from react-icons
import { BiUserCircle, BiShow } from "react-icons/bi"; // Import user and show icons from react-icons
import { AiOutlineEdit } from "react-icons/ai"; // Import edit icon from react-icons
import { MdOutlineDelete } from "react-icons/md"; // Import delete icon from react-icons
import { BsInfoCircle } from "react-icons/bs"; // Import info icon from react-icons

import BookModal from "./BookModal"; // Import BookModal component
import { useState } from "react"; // Import useState hook from react
import { Book } from "../../interfaces/bookInterface"; // Import Book interface

// Define the BookSingleCard component
const BookSingleCard: React.FC<{ book: Book }> = ({ book }) => {
  const [showModal, setShowModal] = useState(false); // State for controlling the visibility of the modal

  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className=" text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          onClick={() => setShowModal(true)}
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
        />
        <Link to={`/book-store/details/${book._id}`}>
          {" "}
          <BsInfoCircle className=" text-2xl text-green-800 hover:text-black" />{" "}
        </Link>
        <Link to={`/book-store/edit/${book._id}`}>
          {" "}
          <AiOutlineEdit className=" text-2xl text-yellow-600 hover:text-black" />{" "}
        </Link>
        <Link to={`/book-store/delete/${book._id}`}>
          {" "}
          <MdOutlineDelete className=" text-2xl text-red-800 hover:text-black" />{" "}
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard; // Export BookSingleCard component
