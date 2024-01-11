// Import necessary components and hooks
import BackButton from "../components/BackButton"; // Import BackButton component
import Spinner from "../components/Spinner"; // Import Spinner component
import axios from "axios"; // Import axios for making HTTP requests
import { useState } from "react"; // Import useState hook for state management
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import { useSnackbar } from "notistack"; // Import useSnackbar hook for showing snackbars

// Define the CreateBooks component
const CreateBooks = () => {
  // Define state variables
  const [loading, setLoading] = useState(false); // State for loading status
  const [title, setTitle] = useState(""); // State for book title
  const [author, setAuthor] = useState(""); // State for book author
  const [publishYear, setPublishYear] = useState(""); // State for book publish year

  // Define hooks
  const navigate = useNavigate(); // Hook for navigation
  const { enqueueSnackbar } = useSnackbar(); // Hook for showing snackbars

  // Define function for saving a book
  const handleSaveBook = () => {
    // Define data to be sent in the request
    const data = {
      title,
      author,
      publishYear,
    };

    // Set loading status to true
    setLoading(true);

    // Make a POST request to the API to create a new book
    axios
      .post(`${import.meta.env.VITE_API_URL}/books`, data)
      .then(() => {
        // On success, set loading status to false, show a success snackbar, and navigate to the book store
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", {
          variant: "success",
        });
        navigate("/book-store");
      })
      .catch((err) => {
        // On error, log the error, show an error snackbar, and set loading status to false
        console.log(err);
        enqueueSnackbar("Something went wrong , please try again later", {
          variant: "error",
        });
        setLoading(false);
      });
  };

  // Define the JSX to be rendered
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 "> Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button onClick={handleSaveBook} className="p-2 bg-sky-300 m-8">
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks; // Export CreateBooks component
