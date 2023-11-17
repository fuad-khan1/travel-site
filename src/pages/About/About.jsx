import React from "react";
import { Link, NavLink } from "react-router-dom";
import aboutImg1 from "../../assets/img3.jpg";
import aboutImg2 from "../../assets/img4.jpg";

const About = () => {
  return (
    <>
      <div
        className="hero h-64"
        style={{
          backgroundImage: "url(https://i.ibb.co/kgsJZsw/banner1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About</h1>
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
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                About
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={aboutImg1}
              className="max-w-sm rounded-md shadow-2xl -rotate-6"
            />
            <img
              src={aboutImg2}
              className="max-w-sm rounded-md shadow-2xl"
            />
            <div>
              <h2 className="text-3xl font-semibold text-red-500">About us</h2>
              <p className="py-6">
              We are dedicated to sharing our love for travel by providing you with carefully crafted itineraries, personalized service, and insider insights. Whether you're a solo traveler seeking new horizons, a couple planning a romantic getaway, or a family in search of unforgettable moments, we are here to turn your travel dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
