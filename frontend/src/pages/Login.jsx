import React, { useState } from "react";
import { useAuth } from "../Contexts/authContext";
import { loginUser } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();
  const { state, dispatch } = useAuth();
  if (state.isAuthenticated) {
    navigate("/"); // Redirect if already authenticated
  }
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(dispatch, form);

    if (result?.token) {
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mt-12 bg-white p-8 border border-gray-300 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>

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

      <div className="mb-6">
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

      {state.error && (
        <p className="text-red-500 text-sm mb-4">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={state.loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200"
      >
        {state.loading ? "Logging in..." : "Log In"}
      </button>

      <p className="mt-4 text-sm text-center text-gray-600">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}
