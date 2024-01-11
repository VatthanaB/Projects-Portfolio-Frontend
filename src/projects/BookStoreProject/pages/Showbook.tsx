// Import necessary components and hooks
import { useEffect, useState } from "react"; // Import useEffect and useState hooks for side effects and state management
import axios from "axios"; // Import axios for making HTTP requests
import { useParams } from "react-router-dom"; // Import useParams hook for accessing route parameters
import BackButton from "../components/BackButton"; // Import BackButton component
import Spinner from "../components/Spinner"; // Import Spinner component

// Define the Book interface
interface Book {
  title: string;
  author: string;
  publishYear: number;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Showbook component
const Showbook = () => {
  const date = new Date();
  const emptyBook = {
    title: "",
    author: "",
    publishYear: 0,
    createdAt: date,
    updatedAt: date,
  };
  const [book, setBook] = useState<Book>(emptyBook); // State for book
  const [loading, setLoading] = useState(false); // State for loading status
  const { id } = useParams(); // Get the id from the route parameters

  // Define effect for fetching the book
  useEffect(() => {
    setLoading(true); // Set loading status to true

    // Make a GET request to the API to fetch the book
    axios
      .get(`${import.meta.env.VITE_API_URL}/books/${id}`)
      .then((res) => {
        setBook(res.data); // On success, set the book and loading status
        setLoading(false);
      })
      .catch((err) => {
        console.log(err); // On error, log the error and set loading status
        setLoading(false);
      });
  }, [id]); // Depend on id to run whenever id changes

  // Define the JSX to be rendered
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl">
          {/* Display the book details */}
          <div className="my-4 ">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{id}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showbook; // Export Showbook component
