import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface CardProps {
  image: string;
  route: string;
  appName: string;
  description: string;
  icons: IconType[];
}
function Card(props: CardProps) {
  return (
    <div className=" max-w-lg md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={props.route}>
        <img
          className="rounded-t-lg w-auto    h-auto object-cover "
          src={props.image}
          alt=""
        />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.appName}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
          {props.icons.map((Icon) => (
            <Icon className="w-6 h-6 mx-1 inline-flex " />
          ))}
        </p>
        <Link
          to={props.route}
          className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Project
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Card;
