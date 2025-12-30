import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { brandData } from "../data/brandData";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Signup");
      return;
    }

    axios
      .get("https://lapwise-backend.onrender.com/api/auth/validate-token", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/signup");
      });
  }, [navigate]);

  if (loading) {
    return (
      <p style={{ textAlign: "center", color: "#c7d2fe" }}>
        Checking authentication...
      </p>
    );
  }

  const brand = selectedBrand ? brandData[selectedBrand] : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #020617)",
        display: "flex",
        justifyContent: "center",
        padding: "40px 20px",
        color: "#e5e7eb",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "#020617",
          borderRadius: "16px",
          padding: "32px",
          border: "1px solid #1e293b",
          boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
        }}
      >
        {/* 🔹 HEADER */}
        <h1 style={{ color: "#e0e7ff", marginBottom: "6px" }}>
          LapWise: An Intelligent & Educational Laptop Advisor
        </h1>
        {user && (
          <p style={{ color: "#94a3b8", marginBottom: "28px" }}>
            Welcome, <strong>{user.username}</strong>
          </p>
        )}

        {/* 🔹 PRIMARY ACTION */}
        <button
          onClick={() => {
            const token = localStorage.getItem("token");
            if (!token) {
              alert("Session expired. Please login again.");
              navigate("/signup");
              return;
            }
            window.location.href = `https://lapwise.onrender.com/?token=${token}`;
          }}
          style={{
            background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 8px 30px rgba(37,99,235,0.45)",
          }}
        >
          Open Prediction & Evaluation Model 🚀
        </button>

        {/* 🔹 BRAND SELECTOR */}
        <div style={{ marginTop: "45px" }}>
          <h3 style={{ color: "#c7d2fe", marginBottom: "10px" }}>
            Select a Laptop Brand
          </h3>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #334155",
              background: "#020617",
              color: "#e5e7eb",
              fontSize: "15px",
            }}
          >
            <option value="">-- Choose a brand --</option>
            {Object.keys(brandData).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* 🔹 EMPTY STATE */}
        {!brand && (
          <div
            style={{
              marginTop: "35px",
              padding: "30px",
              borderRadius: "14px",
              border: "1px dashed #334155",
              textAlign: "center",
              color: "#94a3b8",
            }}
          >
            <h3 style={{ color: "#c7d2fe" }}>
              Brand Insights Preview
            </h3>
            <p style={{ marginTop: "12px" }}>
              Select a brand to see:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: "15px",
                lineHeight: "1.9",
              }}
            >
              <li>✔ Trust & reliability score</li>
              <li>✔ Best & worst use cases</li>
              <li>✔ Ideal price range</li>
              <li>✔ Buyer suitability</li>
              <li>✔ Common complaints</li>
              <li>✔ Official & service links</li>
            </ul>
            <p style={{ marginTop: "18px", fontStyle: "italic" }}>
              Designed to reduce buyer confusion and regret.
            </p>
          </div>
        )}

        {/* 🔹 BRAND DETAILS */}
        {brand && (
          <div
            style={{
              marginTop: "35px",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #1e293b",
              background: "#020617",
            }}
          >
            <h2
              style={{
                color: "#e0e7ff",
                marginBottom: "22px",
                borderBottom: "1px solid #1e293b",
                paddingBottom: "10px",
              }}
            >
              {selectedBrand} — Trust Snapshot
            </h2>

            {/* 🔹 METRICS GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "18px",
                marginBottom: "26px",
              }}
            >
              <div>⭐ <strong>Trust Score</strong><br />{brand.trustScore}/100</div>
              <div>🛠 <strong>Service Coverage</strong><br />{brand.serviceCoverage}</div>
              <div>🔁 <strong>Resale Value</strong><br />{brand.resaleValue}</div>
              <div>⏳ <strong>Lifespan</strong><br />{brand.lifespan}</div>
            </div>

            {/* 🔹 TAG SECTIONS */}
            <h4>✅ Best For</h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {brand.bestFor.map((item) => (
                <span
                  key={item}
                  style={{
                    background: "#1e40af",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <h4 style={{ marginTop: "20px" }}>⚠ Not Ideal For</h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {brand.worstFor.map((item) => (
                <span
                  key={item}
                  style={{
                    background: "#7f1d1d",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <h4 style={{ marginTop: "22px" }}>💰 Ideal Price Range</h4>
            <p style={{ fontSize: "18px", color: "#c7d2fe" }}>
              {brand.priceRange}
            </p>

            <h4>👥 Who Should Buy</h4>
            <p style={{ color: "#94a3b8" }}>{brand.whoShouldBuy}</p>

            <h4>❌ Common Complaints</h4>
            <ul style={{ color: "#fca5a5" }}>
              {brand.complaints.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            {/* 🔹 ACTION BUTTONS */}
            <div
              style={{
                marginTop: "28px",
                display: "flex",
                gap: "14px",
              }}
            >
              <button
                onClick={() => window.open(brand.officialSite, "_blank")}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Official Website 🌐
              </button>

              <button
                onClick={() => window.open(brand.servicePage, "_blank")}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "transparent",
                  color: "#2563eb",
                  border: "1px solid #2563eb",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Service & Support 🛠
              </button>
            </div>
          </div>
        )}

        {/* 🔹 LOGOUT */}
        <div style={{ marginTop: "45px", textAlign: "right" }}>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signup");
            }}
            style={{
              background: "#dc2626",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
