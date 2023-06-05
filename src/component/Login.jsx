import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { loginModalHandler } from "./loginModal";

export default function Login() {
  const artRef = useRef(null);

  return (
    <article
      ref={artRef}
      onClick={(ev) => loginModalHandler(ev, artRef)}
      className="bg-black/70 fixed top-0 left-0 w-full h-full hidden justify-center items-center"
    >
      <div
        onClick={(ev) => {
          ev.stopPropagation();
        }}
        className="bg-white h-screen md:h-auto p-10 rounded-sm flex items-center justify-center flex-col"
      >
        <h1 className="text-2xl">Welcome Back!</h1>

        <form method="post">
          <label htmlFor="" className="py-4 w-full inline-block">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Username"
              className="border-2 border-tw-yellow-500 rounded-md py-2 px-4 w-full"
            />
          </label>

          <label htmlFor="" className="py-4 pt-0 w-full inline-block">
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="border-2 border-tw-yellow-500 rounded-md py-2 px-4 w-full"
            />
          </label>
          <input
            type="submit"
            value="Login"
            className="bg-tw-yellow-700 inline-block w-full md:w-auto py-2 px-8 text-white rounded-md"
          />
          <div className="p-4 text-center md:text-right">
            <Link
              to="/"
              className="hover:underline"
              onClick={(ev) => loginModalHandler(ev, artRef)}
            >
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </article>
  );
}
