"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Page() {
    // Destructure session data from useSession
    const { data: session } = useSession();

    // Check if session exists
    if (session) {
        return ( <
            div className = "w-full h-screen flex flex-col justify-center items-center bg-orange-500" >
            <
            div className = "w-44 h-44 relative mb-4" >
            <
            Image src = { session.user ? .image || "/default-avatar.png" } // Added fallback image
            fill alt = "User Image"
            className = "object-cover rounded-full" /
            >
            <
            /div> <
            p className = "text-2xl mb-2" >
            Welcome < span className = "font-bold" > { session.user ? .name } < /span>. Signed In As <
            /p> <
            p className = "font-bold mb-4" > { session.user ? .email } < /p> <
            button className = "bg-red-600 py-2 px-6 rounded-md text-white"
            onClick = {
                () => signOut() } >
            Sign out <
            /button> <
            /div>
        );
    }

    // Render components for users who are not logged in
    return ( <
        div className = "w-full h-screen flex flex-col justify-center items-center bg-orange-500" >
        <
        div className = "bg-orange-500 mb-6" >
        <
        img src = "logo.svg"
        className = "w-16 h-16"
        alt = "Logo" / >
        <
        /div> <
        main className = "w-full max-w-md text-center" >
        <
        div className = "mb-4 text-white" >
        <
        h1 className = "text-4xl" > Log In < /h1> <
        /div> <
        div className = "flex flex-col mb-4 space-y-4" >
        <
        label className = "text-left text-white" >
        Username <
        input className = "border rounded p-2 w-full" / >
        <
        /label> <
        label className = "text-left text-white" >
        Password <
        input type = "password"
        className = "border rounded p-2 w-full" / >
        <
        /label> <
        /div> <
        button className = "bg-blue-600 text-white py-2 px-6 rounded-md mb-2 w-full"
        onClick = {
            () => signIn("google") } >
        Sign in with Google <
        /button> <
        button className = "border-gray-300 border py-2 px-6 rounded-md mb-2 w-full text-gray-700"
        onClick = {
            () => signIn("github") } >
        Sign in with GitHub <
        /button> <
        /main> <
        /div>
    );
}
