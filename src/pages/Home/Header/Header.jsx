import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { AuthContext } from "../../../Contexts/Authentication";

const Header = () => {
  const {user, singout} = useContext(AuthContext)
  console.log(user)

  const handleLogout =(e)=>{
    singout()
    .then(() => {
    }).catch((error) => {
      console.log(error)
    });

  }
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destination">Destination</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            {" "}
            <span>
              <img src={logo} alt="Logo" className="h-6 w-6 rounded" />
            </span>{" "}
            Exploreworld
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : ""
                }
              >
                Destination
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn">Login</Link>
          {
          user && <span> <button onClick={handleLogout}>Sign Out</button></span>
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
