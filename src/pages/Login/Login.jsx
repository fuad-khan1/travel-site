import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authentication';

const Login = () => {
    const { signin } = useContext(AuthContext);

    const handleSignin = (e) => { 
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signin(email,password )
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            form.reset()
          })
          .catch((error) => {
            console.log(error)
          });


    }

    return (
        <>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
      <form onSubmit={handleSignin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
           <span>New to here? <Link to='/registration' className="label-text-alt link link-hover text-red-400 font-semibold text-lg">Register</Link></span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;