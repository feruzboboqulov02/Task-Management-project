import React, { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tasks from "./pages/Task";

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, rgb(84, 70, 80) 0%, #5f0a87 100%)",
  fontFamily: "'Segoe UI', 'Roboto', sans-serif",
  padding: "2rem",
  position: "relative",
};

const cardStyle = {
  background: "rgba(255, 255, 255, 0.18)",
  padding: "2.5rem 2rem",
  borderRadius: "18px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  width: "90%",
  maxWidth: "700px",
  border: "1.5px solid rgba(255,255,255,0.25)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  color: "#222",
};

const loginCardStyle = {
  ...cardStyle,
  height: "auto",
};

const loginCardContentStyle = {
  padding: "1rem",
  fontSize: "1.1rem",
};

const buttonStyle = {
  margin: "0 0.7rem",
  padding: "0.6rem 1.5rem",
  borderRadius: "8px",
  border: "none",
  background: "#a4508b",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.2s, box-shadow 0.2s",
  boxShadow: "0 2px 8px rgba(164,80,139,0.15)",
};

const activeButtonStyle = {
  ...buttonStyle,
  background: "#fff",
  color: "#a4508b",
  boxShadow: "0 4px 16px 0 rgba(164,80,139,0.15), 0 0 0 2px #a4508b",
};

const logoutButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  backgroundColor: "#ff4f4f",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "10px",
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(255, 79, 79, 0.3)",
  cursor: "pointer",
};

function App() {
  const [token, setToken] = useState("");
  const [page, setPage] = useState("login");

  if (token) {
    return (
      <div style={containerStyle}>
        {/* Logout Button */}
        <button
          style={logoutButtonStyle}
          onClick={() => {
            setToken("");
            setPage("login");
          }}
        >
          Logout
        </button>

        {/* Tasks */}
        <div style={cardStyle}>
          <Tasks token={token} />
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={page === "login" ? loginCardStyle : cardStyle}>
        <div style={loginCardContentStyle}>
          <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <span
              style={{
                fontSize: "2.2rem",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              {page === "login" ? "Welcome Back!" : "Create Account"}
            </span>
            <button
              style={page === "login" ? activeButtonStyle : buttonStyle}
              onClick={() => setPage("login")}
            >
              Login
            </button>
            <button
              style={page === "register" ? activeButtonStyle : buttonStyle}
              onClick={() => setPage("register")}
            >
              Register
            </button>
          </div>
          <div style={{ transition: "all 0.4s" }}>
            {page === "login" ? (
              <Login setToken={setToken} />
            ) : (
              <Register />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
