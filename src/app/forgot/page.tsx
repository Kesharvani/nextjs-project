"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const onEmailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response =await axios.post("/api/users/forgot", { email });
      if(response.status===200){
        console.log("Successfully mail is send")
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form
        className="flex flex-col gap-[1rem] shadow-inner shadow-white p-[4rem]"
        onSubmit={onSubmit}
      >
        <h2 className="text-xl text-center font-bold">Reset the password</h2>
        <h4 className="mb-[1.5rem] text-center">
          Remember email and Password?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </h4>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="email" className="flex-auto">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="p-[0.3rem] rounded-md text-black"
            required
            value={email}
            onChange={onEmailChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="border border-white rounded-md p-[0.5rem] mt-[0.7rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
