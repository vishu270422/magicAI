import React, { useState } from "react";
import { supabase } from "./client";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      const { data, error: insertError } = await supabase
        .from('users')
        .upsert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
          },
        ], { onConflict: ['email'] }); 

      if (insertError) {
        throw insertError;
      }

      setResponseMessage("Check your email for a verification link");
    } catch (error) {
      setResponseMessage(error.message);
    }
  };

  return (
    <div className="flex min-h-full">
      {/* Left Column */}
      <div className="flex-1 px-6 py-12 lg:px-8">
        <div className="flex items-center justify-between">
          <img
            className="ml-6 h-10 w-auto"
            src="https://magicai.liquid-themes.com/assets/img/logo/magicAI-logo.svg"
            alt="Your Company"
          />
          <p className="mr-6 text-right absolute right-0 text-white">
            <a href="#"> &lt; Back to home</a>
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative top-4 left-20">
          <h2 className="mt-10 ml-16 text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>
        <br></br>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignup} className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Enter your first name"
                  required
                  className="block w-full px-4 rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Enter your last name"
                  required
                  className="block w-full px-4 rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  required
                  className="block w-full px-4 rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="   Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="   Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-3xl bg-indigo-900 px-3 py-1.5  font-bold leading-9 text-white  shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>

            <div className="text-center mt-4 text-sm text-gray-500">
              Have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500 ml-2 underline"
              >
                Sign in
              </a>
            </div>
          </form>

          <p>{responseMessage}</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 relative">
  <div className="flex justify-end items-center h-full">
    {/* Image container */}
    <img
      className="w-full h-full object-cover"
      src="https://magicai.liquid-themes.com/images/bg/bg-auth.jpg"
      alt="Background Auth"
      style={{ position: "absolute", zIndex: "-1" }}
    />
    <div
      style={{
        overflow: "hidden",
        width: "100%",
      }}
    >
      <img
        className="w-full h-auto"
        src="https://magicai.liquid-themes.com/images/bg/dash-mockup.jpg"
        alt="Dashboard Mockup"
        style={{
          marginRight: "-25%",
          marginLeft: "auto",
          width: "150%",
          height: "150%",
        }}
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default SignUp;
