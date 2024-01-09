import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);

    axios
      .delete(`${import.meta.env.VITE_API_URL}/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", {
          variant: "success",
        });
        navigate("/book-store");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        enqueueSnackbar("Something went wrong , please try again later", {
          variant: "error",
        });
      });
  };
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

export default DeleteBook;
