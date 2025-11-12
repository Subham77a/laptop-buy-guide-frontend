import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Skills() {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || {};

  const [skills, setSkills] = useState([
    { skillName: "", proficiency: "Beginner", experienceYears: "" },
  ]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false); // for spinner state

  // Add new skill row
  const handleAddSkill = () => {
    setSkills([
      ...skills,
      { skillName: "", proficiency: "Beginner", experienceYears: "" },
    ]);
  };

  // Handle change
  const handleChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  // Remove skill row
  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setMessage("Error: Username not found. Please login again.");
      return;
    }

    try {
      setLoading(true);
      setSaving(true);

      const res = await axios.post("http://localhost:3000/skills", {
        username,
        skills,
      });

      setMessage(res.data.message);
      setLoading(false);

      if (res.data.success) {
        // ✅ Reset form
        setSkills([{ skillName: "", proficiency: "Beginner", experienceYears: "" }]);
        // ✅ Wait 4 seconds, then navigate
        setTimeout(() => {
          setSaving(false);
          navigate("/dashboard", { state: { username } });
        }, 3000);
      } else {
        setSaving(false);
      }
    } catch (error) {
      console.error("Error submitting skills:", error);
      setLoading(false);
      setSaving(false);
      setMessage("Failed to save skills.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Add Your Skills</h2>
      <p style={{ color: "gray" }}>
        Logged in as: <strong>{username}</strong>
      </p>

      <form onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "6px",
              marginBottom: "10px",
              background: "#fafafa",
            }}
          >
            <label>Skill Name</label>
            <input
              type="text"
              value={skill.skillName}
              onChange={(e) =>
                handleChange(index, "skillName", e.target.value)
              }
              placeholder="e.g., React.js"
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />

            <label>Proficiency</label>
            <select
              value={skill.proficiency}
              onChange={(e) =>
                handleChange(index, "proficiency", e.target.value)
              }
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>

            <label>Years of Experience</label>
            <input
              type="number"
              min="0"
              value={skill.experienceYears}
              onChange={(e) =>
                handleChange(index, "experienceYears", e.target.value)
              }
              placeholder="e.g., 2"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />

            {skills.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveSkill(index)}
                style={{
                  marginTop: "10px",
                  background: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                Remove Skill
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddSkill}
          style={{
            background: "#2196F3",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          + Add Another Skill
        </button>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            background: loading ? "#ccc" : "#4CAF50",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Saving..." : "Save All Skills"}
        </button>
      </form>

      {/* Message */}
      {message && (
        <p
          style={{
            marginTop: "15px",
            color: message.includes("success") ? "green" : "red",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      )}

      {/* Spinner Animation */}
      {saving && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #4CAF50",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}

export default Skills;
