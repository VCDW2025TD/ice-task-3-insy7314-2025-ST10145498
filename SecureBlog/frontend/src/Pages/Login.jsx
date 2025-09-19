// // frontend/src/Pages/Login.jsx
// import React, { useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setLoading(true);
//     try {
//       const response = await API.post("/auth/login", { email, password });
//       if (response?.data?.token) {
//         localStorage.setItem("token", response.data.token);
//         setMessage("Login successful!");
//         navigate("/dashboard");
//       } else {
//         setMessage("Login failed");
//       }
//     } catch (err) {
//       const msg = err?.response?.data?.message || err?.response?.data?.error || "Invalid credentials";
//       setMessage(msg);
//       console.error("Login error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
//         <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const response = await API.post("/auth/login", { email, password });
      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        setMessage("Login successful!");
        navigate("/dashboard");
      } else {
        setMessage("Login failed");
      }
    } catch (err) {
      const msg = err?.response?.data?.message || err?.response?.data?.error || "Invalid credentials";
      setMessage(msg);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      {message && <p className="form-message">{message}</p>}
      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button type="submit" disabled={loading} className="form-btn">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
