// Import necessary components and interfaces
import { AiOutlineClose } from "react-icons/ai"; // Import close icon from react-icons
import { PiBookOpenTextLight } from "react-icons/pi"; // Import book icon from react-icons
import { BiUserCircle } from "react-icons/bi"; // Import user icon from react-icons
import { Book } from "../../interfaces/bookInterface"; // Import Book interface

// Define the props for the BookModal component
interface BookModalProps {
  book: Book; // Book object
  onClose: () => void; // Function to close the modal
}

// Define the BookModal component
const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  return (
    // Modal overlay
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose} // Close the modal when overlay is clicked
    >
      // Modal content
      <div
        onClick={(event) => {
          event.stopPropagation(); // Prevent click events from bubbling up to the overlay
        }}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        // Close button
        <AiOutlineClose
          onClick={onClose} // Close the modal when close button is clicked
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
        />
        // Book details
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear} // Display book's publish year
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4> // Display book's ID
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" /> // Book icon
          <h2 className="my-1">{book.title}</h2> // Display book's title
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className=" text-red-300 text-2xl" /> // User icon
          <h2 className="my-1">{book.author}</h2> // Display book's author
        </div>
      </div>
    </div>
  );
};

// Export the BookModal component
export default BookModal;
