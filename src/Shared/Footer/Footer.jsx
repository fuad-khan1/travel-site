import React from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaFacebook,FaYoutube,FaSquareTwitter   } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-black text-white">
        <aside>
          <img src={logo} alt="logo" className="w-10 h-10" />{" "}
          <Link className="font-semibold" to="/">
            Exploreworld
          </Link>
        </aside>

        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
        <aside>
    <p>Copyright © 2023 - All right reserved by Exploreworld </p>
  </aside>
  <div className="flex  space-x-3">
  <FaFacebook />
  <FaYoutube />
  <FaSquareTwitter  />
  </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
