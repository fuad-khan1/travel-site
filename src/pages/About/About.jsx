import React from "react";
import banner  from '../../assets/banner1.jpg'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/kgsJZsw/banner1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About</h1>
            <p className="mb-5">
              <Link to='/'>Home</Link>/<Link to='/about'>About</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
