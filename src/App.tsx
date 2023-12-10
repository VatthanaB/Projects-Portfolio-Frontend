import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookStoreHome from "./projects/BookStoreProject/pages/Home";
import RootLayout from "./projects/Root/RootLayout";
import CreateBooks from "./projects/BookStoreProject/pages/CreateBooks";
import EditBook from "./projects/BookStoreProject/pages/EditBook";
import DeleteBook from "./projects/BookStoreProject/pages/DeleteBook";
import Showbook from "./projects/BookStoreProject/pages/Showbook";
import AppFood from "./projects/FoodOrderingApp/AppFood";
import ErrorPage from "./projects/Root/ErrorPage";
import HomePage from "./projects/Root/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "book-store",
        children: [
          { index: true, element: <BookStoreHome /> },
          { path: "create", element: <CreateBooks /> },
          { path: "details/:id", element: <Showbook /> },
          { path: "edit/:id", element: <EditBook /> },
          { path: "delete/:id", element: <DeleteBook /> },
        ],
      },
      {
        path: "food-app",
        children: [{ index: true, element: <AppFood /> }],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
