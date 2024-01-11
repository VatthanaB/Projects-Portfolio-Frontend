// Import necessary components
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import { BsArrowLeft } from "react-icons/bs"; // Import left arrow icon from react-icons

// Define the BackButton component
const BackButton = ({ destination = "/book-store" }) => {
  return (
    <div className="flex">
      {" "}
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton; // Export BackButton component
