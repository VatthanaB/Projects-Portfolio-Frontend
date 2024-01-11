// Import necessary components and hooks
import { useState } from "react"; // Import useState hook for state management
import BackButton from "../components/BackButton"; // Import BackButton component
import Spinner from "../components/Spinner"; // Import Spinner component
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate and useParams hooks for navigation and accessing route parameters
import { useSnackbar } from "notistack"; // Import useSnackbar hook for showing snackbars

// Define the DeleteBook component
const DeleteBook = () => {
  // Define state variables
  const [loading, setLoading] = useState(false); // State for loading status

  // Define hooks
  const navigate = useNavigate(); // Hook for navigation
  const { id } = useParams(); // Hook for accessing route parameters
  const { enqueueSnackbar } = useSnackbar(); // Hook for showing snackbars

  // Define function for deleting a book
  const handleDeleteBook = () => {
    // Set loading status to true
    setLoading(true);

    // Make a DELETE request to the API to delete the book
    axios
      .delete(`${import.meta.env.VITE_API_URL}/books/${id}`)
      .then(() => {
        // On success, set loading status to false, show a success snackbar, and navigate to the book store
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", {
          variant: "success",
        });
        navigate("/book-store");
      })
      .catch((err) => {
        // On error, log the error, show an error snackbar, and set loading status to false
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
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          Are You Sure You Want to delete this book ?{" "}
        </h3>
        <button
          onClick={handleDeleteBook}
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Yes , Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook; // Export DeleteBook component
