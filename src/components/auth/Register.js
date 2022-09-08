import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-screen h-screen m-0 p-0 box-border flex flex-col justify-center items-center bg-backlight">
      <div className="flex justify-center items-center mb-14">
        <img
          src={require("../../img/logo.png")}
          alt="logo"
          className="mr-4 w-14 h-14"
        />
        <h1 className="font-bold text-2xl">nite</h1>
      </div>
      <div className="bg-white rounded-3xl p-10 w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/4">
        <h1 className="font-semibold text-3xl">Join nite</h1>
        <p className="font-medium text-lighttxt mt-1">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700">
            Login
          </Link>
        </p>
        <form className="mt-10">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl bg-neutral-200 mb-2 py-4 px-8 outline-none border-none "
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-2xl bg-neutral-200 mb-2 py-4 px-8 outline-none border-none "
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl bg-neutral-200 mb-2 py-4 px-8 outline-none border-none "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl bg-neutral-200 mb-2 py-4 px-8 outline-none border-none "
          />
          <button
            type="submit"
            className="rounded-2xl mt-5 w-full bg-black p-4 text-lighttxt text-center font-semibold "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
