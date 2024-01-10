import profilePic from "../../assets/images/root/profile.jpg";
import { NavLink, Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const isActiveClassName =
    "block py-2 pl-3 pr-4 text-customDarkOrange rounded hover:text-white md:border-0 ";
  const isNotActiveClassName =
    "block py-2 pl-3 pr-4 text-white rounded hover:text-customDarkOrange md:border-0 ";
  const isNotActiveClassNameMobile =
    "block py-2 pl-3 pr-4 text-white rounded hover:text-customDarkOrange md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  const isActiveClassNameMobile =
    "block py-2 pl-3 pr-4 text-customDarkOrange rounded hover:text-white md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  return (
    <nav className="bg-customBlue border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around md:justify-between mx-auto p-4">
        <Link to="/" className="flex items-center ">
          <img
            src={profilePic}
            className="h-16 mr-3 rounded-full"
            alt=" Logo"
          />
          <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-white">
            Vatthana's Projects
          </span>
        </Link>
        {/* Navlinks */}
        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className=" text-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? isActiveClassName : isNotActiveClassName
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book-store"
                // className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                className={({ isActive }) =>
                  isActive ? isActiveClassName : isNotActiveClassName
                }
              >
                Book-Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/food-app"
                className={({ isActive }) =>
                  isActive ? isActiveClassName : isNotActiveClassName
                }
              >
                Food-App
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/next-project"
                className={({ isActive }) =>
                  isActive ? isActiveClassName : isNotActiveClassName
                }
              >
                Next Project (Coming Soon)
              </NavLink>
            </li>
            <li>
              <a
                href="https://vatthana-portfolio-a20e88488316.herokuapp.com/"
                className={isNotActiveClassName}
                target="_blank"
                rel="noopener noreferrer"
              >
                My Personal Page
              </a>
            </li>
          </ul>
        </div>

        {/* Dropdown */}
        <details className="dropdown dropdown-end lg:hidden">
          <summary className=" border-none btn bg-transparent text-3xl text-white">
            <FaHamburger />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-400 rounded-box w-52 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? isActiveClassNameMobile
                    : isNotActiveClassNameMobile
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book-store"
                // className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                className={({ isActive }) =>
                  isActive
                    ? isActiveClassNameMobile
                    : isNotActiveClassNameMobile
                }
              >
                Book-Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/food-app"
                className={({ isActive }) =>
                  isActive
                    ? isActiveClassNameMobile
                    : isNotActiveClassNameMobile
                }
              >
                Food-App
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/next-project"
                className={({ isActive }) =>
                  isActive
                    ? isActiveClassNameMobile
                    : isNotActiveClassNameMobile
                }
              >
                Next Project (Coming Soon)
              </NavLink>
            </li>
            <li>
              <a
                href="https://vatthana-portfolio-a20e88488316.herokuapp.com/"
                className={isNotActiveClassNameMobile}
                target="_blank"
                rel="noopener noreferrer"
              >
                My Personal Page
              </a>
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;
