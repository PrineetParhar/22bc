import React, { useState } from "react";

function SignUp() {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle sign-up form submission
  const handleSignup = (e) => {
    e.preventDefault();

    if (signupUsername && signupPassword) {
      // Store username and password in localStorage (for simplicity)
      localStorage.setItem(signupUsername, signupPassword);
      setMessage(`Sign-up successful for user: ${signupUsername}`);
      setSignupUsername(""); // Reset fields
      setSignupPassword("");
    } else {
      setMessage("Both fields are required!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h1>

        {/* Sign Up Form */}
        <form onSubmit={handleSignup} className="space-y-6">
          {/* Username Input */}
          <div>
            <label
              htmlFor="signupUsername"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username/Email
            </label>
            <input
              type="text"
              id="signupUsername"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your username/email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="signupPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="signupPassword"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <p className="mt-4 text-center text-gray-700 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default SignUp;
