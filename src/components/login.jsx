import React, { useState } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling login (validation and API call)
    console.log("Login with:", email, password);
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
    // Add Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log("Logging in with Facebook");
    // Add Facebook login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email ID</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaEnvelope className="text-gray-500 ml-3" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 rounded-md border-none focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Input with Forgot Password Link */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaLock className="text-gray-500 ml-3" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 rounded-md border-none focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <a
              href="/forgot-password"
              className="text-blue-500 absolute top-0 right-0  mr-3 text-sm hover:underline mb-4"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account?</span>
          <a href="/signup" className="text-blue-500 hover:underline"> Sign Up</a>
        </div>

        {/* Social Media Login Buttons */}
        <div className="mt-6 flex justify-between">
          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center bg-red-600 text-white p-3 rounded-md  hover:bg-red-700 w-full"
          >
            <FaGoogle className="w-6 h-6 mr-2" />
            Login with Google
          </button>
        </div>
        <div className="mt-4 flex justify-between">
          {/* Facebook Login Button */}
          <button
            onClick={handleFacebookLogin}
            className="flex items-center bg-blue-600 text-white p-3  rounded-md  hover:bg-blue-700 w-full"
          >
            <FaFacebook className="w-6 h-6 mr-2" />
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
