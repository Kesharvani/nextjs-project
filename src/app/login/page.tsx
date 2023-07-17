"use client";

import Link from "next/link";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  const [userLoginData, setUserLoginData] = React.useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e: any) => {
    setUserLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", userLoginData);
      console.log(response);
      router.push("/profile");
    } catch (error) {
      console.error("Login failed!!", error);
    }
  };
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form
        onSubmit={onLogin}
        className="flex flex-col gap-[1rem] shadow-inner shadow-white p-[4rem]"
      >
        <h2 className="text-xl text-center font-bold">
          Login to use an account
        </h2>
        <h4 className="mb-[1.5rem] text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="underline">
            Signup
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
            value={userLoginData.email}
            onChange={onChangeHandler}
          />
        </div>

        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-[0.3rem] rounded-md text-black"
            value={userLoginData.password}
            onChange={onChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="border border-white rounded-md p-[0.5rem] mt-[1.5rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
