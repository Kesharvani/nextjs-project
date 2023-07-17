"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
export default function ProfilePage() {
  const router = useRouter();
  const [userId, setUserId] = useState("Nothing");
  const logout = async () => {
    await axios.get("/api/users/logout");
    router.push("/login");
  };

  const getUserDetails = async () => {
    try {
      const {
        data: { user },
      } = await axios.get("/api/users/me");
      setUserId(user._id);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>this is profile page</div>
      <button onClick={logout}>Logout</button>
      {userId === "Nothing" ? "Nothing" : <Link href={`/profile/${userId}`}>{userId}</Link>}
      <button onClick={getUserDetails}>User Details</button>
    </>
  );
}
