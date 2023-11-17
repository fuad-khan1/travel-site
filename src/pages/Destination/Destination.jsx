import React from 'react';
import { NavLink } from 'react-router-dom';

const Destination = () => {
    return (
        <>
            <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/SxxpDRZ/destination1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Destination</h1>
            <p className="mb-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                Home
              </NavLink>{" "}
              /{" "}
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                Destination
              </NavLink>
            </p>
          </div>
        </div>
      </div>
        </>
    );
};

export default Destination;