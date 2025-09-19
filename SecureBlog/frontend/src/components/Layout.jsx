
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Layout = ({ children }) => {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>{" | "}
//         {!isLoggedIn ? (
//           <>
//             <Link to="/register">Register</Link>{" | "}
//             <Link to="/login">Login</Link>
//           </>
//         ) : (
//           <>
//             <Link to="/dashboard">Dashboard</Link>{" | "}
//             <button
//               onClick={handleLogout}
//               style={{
//                 border: "none",
//                 background: "none",
//                 cursor: "pointer",
//                 color: "blue",
//                 textDecoration: "underline"
//               }}
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </nav>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Layout;
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
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="nav-logo">My App</Link>
          <Link to="/" className="nav-link">Home</Link>
          {!isLoggedIn && <Link to="/register" className="nav-link">Register</Link>}
          {!isLoggedIn && <Link to="/login" className="nav-link">Login</Link>}
          {isLoggedIn && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
        </div>

        <div className="nav-right">
          {isLoggedIn && (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
