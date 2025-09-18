
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        {!isLoggedIn ? (
          <>
            <Link to="/register">Register</Link>{" | "}
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>{" | "}
            <button
              onClick={handleLogout}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline"
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
