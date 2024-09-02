"use client";
import Link from "next/link";
import SignInForm from "@/components/forms/signin-form";
import SignUpForm from "@/components/forms/signup-form";
import { useState } from "react";

export default function AuthenticationPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUp = () => {
    setIsSignIn(true);
  }

  return (
    <div className="relative h-screen flex-col items-center justify-center bg-black md:grid lg:max-w-none ">
      {/* <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
      </div> */}
      <div className="p-4 lg:p-8 h-3/5 flex items-center rounded-xl border-2 border-gray-500">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </h1>
          </div>
          {isSignIn ? <SignInForm /> : <SignUpForm onSignUp={handleSignUp} />}
          <p>
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsSignIn(!isSignIn)}>{isSignIn ? 'Sign Up' : 'Sign In'}</button>
          </p>
        </div>
      </div>
    </div>
  );
}