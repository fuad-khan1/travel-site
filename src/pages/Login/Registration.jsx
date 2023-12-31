import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authentication";

const Registration = () => {
  const [error, setErr] = useState("");
  const {user, createUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSignup = (e) => { 
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;


    setErr("");

    if (password !== confirm) {
      setErr("password not matched");
      return;
    } else if (password.length < 6) {
      setErr("password less than 6 character !");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        form.reset() ;
        navigate("/login");

        


      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
            <form onSubmit={handleSignup} className="card-body">
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
                 {error && (
                <div className="text-red-500 my-2">
                  <p>{error}</p>
                </div>
              )}
              
                <label className="label">
                  <span>
                    Already Registered?{" "}
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover text-red-400 font-semibold text-lg"
                    >
                      Login
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
