// Import necessary components
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import { BsArrowLeft } from "react-icons/bs"; // Import left arrow icon from react-icons

// Define the BackButton component
const BackButton = ({ destination = "/book-store" }) => {
  return (
    <div className="flex">
      {" "}
      // Use flex layout
      <Link
        to={destination} // Link to the destination passed as a prop, or "/book-store" by default
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit" // CSS classes for styling
      >
        <BsArrowLeft className="text-2xl" /> // Left arrow icon
      </Link>
    </div>
  );
};

export default BackButton; // Export BackButton component
