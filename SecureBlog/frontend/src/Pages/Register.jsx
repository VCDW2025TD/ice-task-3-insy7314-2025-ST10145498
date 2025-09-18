// frontend/src/Pages/Register.jsx
import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const response = await API.post("/auth/register", { email, password });
      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        setMessage("Registration successful!");
        navigate("/dashboard");
      } else {
        setMessage("Registration failed");
      }
    } catch (err) {
      // prefer backend message if available
      const msg = err?.response?.data?.message || err?.response?.data?.error || "Registration failed.";
      setMessage(msg);
      console.error("Register error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
      </form>
    </div>
  );
};

export default Register;
