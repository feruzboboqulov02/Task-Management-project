import React, { useState } from "react";
import axios from "axios";

const inputStyle = {
  width: "100%",
  padding: "0.8rem",
  margin: "0.7rem 0",
  borderRadius: "8px",
  border: "1.5px solid #a4508b",
  outline: "none",
  fontSize: "1rem",
  background: "rgba(255,255,255,0.7)"
};

export default function Login({ setToken }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      setToken(res.data.token);
      setMsg(" Login successful!");
    } catch (err) {
      setMsg(" Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
      <input
        style={inputStyle}
        name="email"
        placeholder=" Enter your email address"
        onChange={handleChange}
        autoComplete="email"
      />
      <input
        style={inputStyle}
        name="password"
        type="password"
        placeholder=" Enter your password"
        onChange={handleChange}
        autoComplete="current-password"
      />
      <button type="submit" style={{ ...inputStyle, background: "#a4508b", color: "#fff", border: "none", fontWeight: "bold", cursor: "pointer" }}>
        Login
      </button>
      <div style={{ marginTop: "0.7rem", textAlign: "center" }}>{msg}</div>
    </form>
  );
}