"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
export default function ProfilePage(){
    const router=useRouter()
    const logout=async()=>{
        await axios.get("/api/users/logout")
        router.push("/login")
    }
    return (
        <>
        <div>this is profile page</div>
        <button onClick={logout}>Logout</button>
        </>
    )
}