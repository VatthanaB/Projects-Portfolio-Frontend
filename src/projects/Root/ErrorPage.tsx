import { Link } from "react-router-dom";

export default function ErrorPage() {
  // Error page for when user tries to access a page that does not exist, redirects to home page
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-10">
        <h1 className="mt-6 text-center text-8xl font-extrabold text-gray-900">
          Oops!
        </h1>
        <p className="mt-1 pb-10 text-center text-xl text-gray-800 ">
          Something went wrong. This page does not exist.
        </p>
        <Link to="/" className="mt-8 space-y-4">
          <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl   font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
