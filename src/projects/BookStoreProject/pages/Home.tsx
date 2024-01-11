// Import necessary components and hooks
import { useEffect, useState } from "react"; // Import useEffect and useState hooks for side effects and state management
import axios from "axios"; // Import axios for making HTTP requests
import Spinner from "../components/Spinner"; // Import Spinner component
import { Link } from "react-router-dom"; // Import Link component for navigation
import { MdOutlineAddBox } from "react-icons/md"; // Import MdOutlineAddBox icon

import BookTable from "../components/home/BookTable"; // Import BookTable component
import BookCard from "../components/home/BookCard"; // Import BookCard component

// Define the Home component
const Home = () => {
  // Define state variables
  const [books, setBooks] = useState([]); // State for books
  const [loading, setLoading] = useState(false); // State for loading status
  const [showType, setShowType] = useState("table"); // State for show type

  // Define effect for fetching books
  useEffect(() => {
    // Set loading status to true
    setLoading(true);

    // Make a GET request to the API to fetch the books
    axios
      .get(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => {
        // On success, set the books and loading status
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        // On error, log the error and set loading status
        console.log(err);
        setLoading(false);
      });
  }, []); // Depend on nothing to run only on mount

  // Define the JSX to be rendered
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 ">
        <button
          className=" bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className=" bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl my-8">Vatthana's Book Store</h1>
        <Link to="/book-store/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home; // Export Home component
