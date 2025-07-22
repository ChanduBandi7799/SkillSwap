import React, { useState } from "react";
import { useAuth } from "../Contexts/authContext";
import { signupUser } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
    const navigate = useNavigate();
  const { state, dispatch } = useAuth();
  if (state.isAuthenticated) {
    navigate("/"); // Redirect if already authenticated
  }
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email : "",
  });

  const [passwordError, setPasswordError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setPasswordError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const payload = {
      username: form.username,
      password: form.password,
      email: form.email, // <-- add email here
    };

    const result = await signupUser(dispatch, payload);
    if (result) {
      // Navigate to a different page on successful signup
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mt-12 bg-white p-8 border border-gray-300 rounded-lg shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {passwordError && (
        <p className="text-red-500 text-sm mb-4">{passwordError}</p>
      )}

      {state.error && (
        <p className="text-red-500 text-sm mb-4">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={state.loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200"
      >
        {state.loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}
