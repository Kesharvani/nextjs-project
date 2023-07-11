"use client";

import Link from "next/link";

export default function SignupPage() {
  const onSignup = () => {
    console.log("signup successfully!!");
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
            className="p-[0.3rem] rounded-md"
          />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="email" className="flex-auto">
            Email
          </label>
          <input type="text" name="email" className="p-[0.3rem] rounded-md" />
        </div>

        <div className="flex flex-col gap-[0.2rem]">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-[0.3rem] rounded-md"
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