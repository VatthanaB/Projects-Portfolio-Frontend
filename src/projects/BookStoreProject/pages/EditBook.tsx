// Import necessary components and hooks
import BackButton from "../components/BackButton"; // Import BackButton component
import Spinner from "../components/Spinner"; // Import Spinner component
import axios from "axios"; // Import axios for making HTTP requests
import { useState, useEffect } from "react"; // Import useState and useEffect hooks for state management and side effects
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate and useParams hooks for navigation and accessing route parameters
import { useSnackbar } from "notistack"; // Import useSnackbar hook for showing snackbars

// Define the EditBook component
const EditBook = () => {
  // Define state variables
  const [loading, setLoading] = useState(false); // State for loading status
  const [title, setTitle] = useState(""); // State for book title
  const [author, setAuthor] = useState(""); // State for book author
  const [publishYear, setPublishYear] = useState(""); // State for book publish year

  // Define hooks
  const navigate = useNavigate(); // Hook for navigation
  const { id } = useParams(); // Hook for accessing route parameters
  const { enqueueSnackbar } = useSnackbar(); // Hook for showing snackbars

  // Define effect for fetching book details
  useEffect(() => {
    // Set loading status to true
    setLoading(true);

    // Make a GET request to the API to fetch the book details
    axios
      .get(`${import.meta.env.VITE_API_URL}/books/${id}`)
      .then((res) => {
        // On success, set the book details and loading status
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        // On error, log the error, show an alert, and set loading status
        console.log(err);
        alert("Something went wrong , please try again later");
        setLoading(false);
      });
  }, [id]); // Depend on the id to refetch when it changes

  // Define function for editing a book
  const handleEditBook = () => {
    // Define the data to be sent
    const data = {
      title,
      author,
      publishYear,
    };

    // Set loading status to true
    setLoading(true);

    // Make a PUT request to the API to update the book
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        // On success, set loading status, show a success snackbar, and navigate to the book store
        setLoading(false);
        enqueueSnackbar("Book Updated Successfully", {
          variant: "success",
        });
        navigate("/book-store");
      })
      .catch((err) => {
        // On error, log the error, show an error snackbar, and set loading status
        console.log(err);
        setLoading(false);
        enqueueSnackbar("Something went wrong , please try again later", {
          variant: "error",
        });
      });
  };

  // Define the JSX to be rendered
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 "> Edit Book</h1>
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
        <button onClick={handleEditBook} className="p-2 bg-sky-300 m-8">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook; // Export EditBook component
