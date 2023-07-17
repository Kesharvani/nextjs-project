"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  // updating user on onChange event
  const onChangeHandler = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSignup = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("singup successfull:", response.data);
      router.push("/login");
    } catch (error: any) {
      console.error("Signup failed!!", error.message);
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form
        onSubmit={onSignup}
        className="flex flex-col gap-[1rem] shadow-inner shadow-white p-[4rem]"
      >
        <h2 className="text-xl text-center font-bold">
          Signup to create an account
        </h2>
        <h4 className="mb-[1.5rem] text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </h4>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="username" className="">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="p-[0.3rem] rounded-md text-black"
            value={user.username}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="email" className="flex-auto">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="p-[0.3rem] rounded-md text-black"
            value={user.email}
            onChange={onChangeHandler}
          />
        </div>

        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-[0.3rem] rounded-md text-black"
            value={user.password}
            onChange={onChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="border border-white rounded-md p-[0.5rem] mt-[1.5rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer"
        >
          Signup
        </button>
      </form>
    </div>
  );
}