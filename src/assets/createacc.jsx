import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "http://localhost:3000/addDetail";

function Createacc() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

   const navigate = useNavigate(); 
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending data...");

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful! Redirecting... ");

        setTimeout(() => {
          navigate("/signup");
        }, 2000);

      } else {
        setMessage("Registration failed ");
      }
    } catch (error) {
      setMessage(`Network error: ${error.message}`);
    }
  };



  // 🎨 Styles (matching Signin)
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
    maxWidth: "420px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#00aaff",
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

  const messageStyle = {
    marginTop: "15px",
    fontSize: "0.9rem",
    fontWeight: "500",
    color: message.includes("successful") ? "#00ff95" : "#ff5e5e",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={titleStyle}>Create Account</h2>
        <p style={subtitleStyle}>Fill in your details to get started</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #00aaff")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #00aaff")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #00aaff")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #00aaff")}
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
            Register
          </button>
        </form>

        {message && <p style={messageStyle}>{message}</p>}
      </div>
    </div>
  );
}

export default Createacc;
