import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-screen h-screen m-0 p-0 box-border flex flex-col justify-center items-center bg-backlight">
      <div className="flex justify-center items-center mb-14">
        <img
          src={require("../../img/logo.png")}
          alt="logo"
          className="mr-4 w-12 h-12"
        />
        <h1 className="font-bold text-2xl">nite</h1>
      </div>
      <div className="bg-white rounded-3xl p-10 w-11/12 max-w-[400px]">
        <h1 className="font-semibold text-3xl">Log in</h1>
        <p className="font-medium text-lighttxt mt-1 text-sm">
          New to nite?{" "}
          <Link to="/register" className="text-blue-700">
            Register
          </Link>
        </p>
        <form className="mt-8">
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
            className="rounded-2xl mt-2 mb-4 w-full bg-black p-4 text-lighttxt text-center font-semibold text-sm"
          >
            Login
          </button>
          <Link
            to="/reset-password"
            className="font-medium text-blue-700 text-sm"
          >
            Forgot your password?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
