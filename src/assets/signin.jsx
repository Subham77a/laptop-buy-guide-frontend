import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });

    // ✅ Store JWT instead of relying on message
    localStorage.setItem("token", res.data.token);

    // ✅ Navigate after token is stored
    navigate("/dashboard");

  } catch (err) {
    setMessage("Invalid username or password");
  }
};

  const handleCreateAccount = () => {
    navigate("/createacc");
  };

  // --- Inline Styles ---
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "radial-gradient(circle at top left, #111, #000)",
    color: "#ddd",
    fontFamily: "Poppins, sans-serif",
  };

  const boxStyle = {
    background: "rgba(20, 20, 20, 0.9)",
    border: "1px solid #2e2e2e",
    borderRadius: "15px",
    boxShadow: "0 0 25px rgba(0,0,0,0.7)",
    padding: "40px 50px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#0d99ff",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    color: "#aaa",
    fontSize: "0.95rem",
    marginBottom: "25px",
  };

  const inputStyle = {
    background: "#121212",
    border: "1px solid #2e2e2e",
    borderRadius: "8px",
    padding: "12px",
    color: "#eaeaea",
    fontSize: "1rem",
    marginBottom: "15px",
    width: "100%",
    transition: "0.3s ease",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #007bff, #0056b3)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
    marginTop: "10px",
    transition: "all 0.3s ease",
  };

  const createBtnStyle = {
    background: "none",
    border: "none",
    color: "#0d99ff",
    marginTop: "20px",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "0.9rem",
    transition: "0.3s ease",
  };

  const messageStyle = {
    marginTop: "15px",
    fontSize: "0.9rem",
    fontWeight: "500",
    color: message.includes("successful") ? "#00ff95" : "#ff5e5e",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={titleStyle}>Welcome Back</h2>
        <p style={subtitleStyle}>Sign in to continue to your dashboard</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #0d99ff")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #0d99ff")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #0099ff, #0066cc)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #007bff, #0056b3)")
            }
          >
            Login
          </button>
        </form>

        {message && <p style={messageStyle}>{message}</p>}

        <button
          onClick={handleCreateAccount}
          style={createBtnStyle}
          onMouseEnter={(e) => (e.target.style.color = "#66c2ff")}
          onMouseLeave={(e) => (e.target.style.color = "#0d99ff")}
        >
          Don’t have an account? Create one
        </button>
      </div>
    </div>
  );
}

export default Signin;
