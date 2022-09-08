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
      <div className="bg-white rounded-3xl p-10 w-11/12 max-w-[400px]">
        <h1 className="font-semibold text-3xl">Join nite</h1>
        <p className="font-medium text-lighttxt mt-1 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700">
            Login
          </Link>
        </p>
        <form className="mt-8">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl bg-neutral-100 mb-2 p-4 outline-none border-none text-sm"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-2xl bg-neutral-100 mb-2 p-4 outline-none border-none text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl bg-neutral-100 mb-2 p-4 outline-none border-none text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl bg-neutral-100 mb-2 p-4 outline-none border-none text-sm"
          />
          <button
            type="submit"
            className="rounded-2xl mt-2 w-full bg-black p-4 text-lighttxt text-center font-semibold text-sm"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
