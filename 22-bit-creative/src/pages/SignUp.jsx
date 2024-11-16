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
    <div className="relative min-h-screen bg-gradient-to-r from-blue-700 via-red-700 to-purple-100 animate-gradient">
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          LOG IN
        </h1>

        {/* Sign Up Form */}
        <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSignup}>
            {/* Username Input */}
            <div className="mb-6">
              <label
                htmlFor="signupUsername"
                className="block text-lg font-medium mb-2 text-gray-700"
              >
                Username/Email:
              </label>
              <input
                type="text"
                id="signupUsername"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username/email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="signupPassword"
                className="block text-lg font-medium mb-2 text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="signupPassword"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Feedback Message */}
          {message && (
            <p className="mt-4 text-center text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
