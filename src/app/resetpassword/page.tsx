"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
export default function ResetPassword() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState(false);


    useEffect(() => {
      const urlToken = window.location.search.split("=")[1];
      setToken(urlToken || "");
    }, []);
   
  const onPasswordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await axios.post("/api/users/resetpassword", { password, token });
      setResetSuccess(true)
    } catch (error) {
      setError(true)
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1 className="text-4xl">Reset Password</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : "No token"}
      </h2>
      <form
        className="flex flex-col gap-[1rem] shadow-inner shadow-white p-[4rem]"
        onSubmit={onSubmit}
      >
        <h2 className="text-xl text-center font-bold">Reset the password</h2>

        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="email" className="flex-auto">
            Password
          </label>
          <input
            type="text"
            name="password"
            className="p-[0.3rem] rounded-md text-black"
            required
            onChange={onPasswordHandler}
          />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="email" className="flex-auto">
            Confirm Password
          </label>
          <input
            type="text"
            name="confirmPassword"
            className="p-[0.3rem] rounded-md text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="border border-white rounded-md p-[0.5rem] mt-[0.7rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer"
        >
          Submit
        </button>
      </form>

      {resetSuccess && (
        <div>
          <h2 className="text-2xl">Reset Password Successfull</h2>
          Go to
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="text-black bg-orange-500">Something Went Wrong!!</h2>
        </div>
      )}
    </div>
  );
}
