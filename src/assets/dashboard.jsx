import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRightCircle,
  Laptop2,
  DollarSign,
  Brain,
  ExternalLink,
} from "lucide-react";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username;

  // redirect if no username
  useEffect(() => {
    if (!username) {
      alert("Sign in first!");
      navigate("/signup");
    }
  }, [username, navigate]);

  // form state
  const [actualPrice, setActualPrice] = useState("");
  const [predictedPrice, setPredictedPrice] = useState("");
  const [advice, setAdvice] = useState(null);
  const [brand, setBrand] = useState("");

  // hover states for simple interaction
  const [hoverEval, setHoverEval] = useState(false);
  const [hoverBrandBtn, setHoverBrandBtn] = useState(false);
  const [hoverPredBtn, setHoverPredBtn] = useState(false);

  const brandWebsites = {
    asus: "https://www.asus.com",
    acer: "https://www.acer.com",
    lenovo:
      "https://support.lenovo.com/in/en/lenovo-service-provider",
    dell: "https://www.dell.com",
    hp: "https://www.hp.com",
    razor: "https://www.razer.com",
    apple: "https://www.apple.com",
    windows: "https://www.microsoft.com",
    google: "https://store.google.com",
  };

  // Evaluate deal with validation for zero / invalid inputs
  const handleEvaluate = () => {
    const actual = parseFloat(actualPrice);
    const predicted = parseFloat(predictedPrice);

    if (isNaN(actual) || isNaN(predicted)) {
      alert("Please enter valid numbers for both prices.");
      return;
    }
    if (predicted === 0) {
      alert("Predicted price must be greater than 0.");
      return;
    }

    const diffPercent = ((actual - predicted) / predicted) * 100;
    let score, message;

    if (diffPercent < -15) {
      score = 9;
      message = "🔥 Great deal! Definitely buy it.";
    } else if (diffPercent < 0) {
      score = 7;
      message = "✅ Good deal. Worth considering.";
    } else if (diffPercent < 10) {
      score = 5;
      message = "⚖️ Average deal. Neutral.";
    } else if (diffPercent < 20) {
      score = 3;
      message = "⚠️ Slightly overpriced. Maybe wait.";
    } else {
      score = 1;
      message = "❌ Overpriced. Don’t buy.";
    }

    setAdvice({ score, message });
  };

  const handleBrandRedirect = () => {
    if (!brand) {
      alert("Please select a brand first.");
      return;
    }
    const url = brandWebsites[brand];
    if (!url) {
      alert("Brand website not available.");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!username) return <div>Redirecting to Sign-In...</div>;

  // INLINE STYLES (no external css)
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background:
        "linear-gradient(180deg, #0f1226 0%, #0b0d14 100%)",
      color: "#f5f7fb",
      fontFamily: "Inter, 'Segoe UI', Roboto, sans-serif",
      padding: "36px",
    },
    card: {
      width: "100%",
      maxWidth: "720px",
      borderRadius: "20px",
      background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
      border: "1px solid rgba(255,255,255,0.04)",
      boxShadow: "0 12px 40px rgba(2,6,23,0.6)",
      padding: "32px",
      backdropFilter: "blur(8px)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "16px",
      marginBottom: "22px",
    },
    titleBlock: {
      display: "flex",
      flexDirection: "column",
    },
    title: {
      fontSize: "24px",
      fontWeight: 800,
      margin: 0,
      color: "#ffffff",
    },
    subtitle: {
      marginTop: "6px",
      color: "#9aa3bf",
      fontSize: "13.5px",
    },
    predBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: hoverPredBtn ? "#2b6af8" : "linear-gradient(180deg,#3b82f6,#2563eb)",
      color: "#fff",
      padding: "14px 18px",
      borderRadius: "14px",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "15px",
      boxShadow: hoverPredBtn ? "0 8px 30px rgba(37,99,235,0.28)" : "0 6px 20px rgba(59,130,246,0.18)",
      textDecoration: "none",
    },
    section: {
      marginTop: "18px",
    },
    labelRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "8px",
      color: "#cbd5e1",
      fontWeight: 600,
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.02)",
      color: "#eef2ff",
      fontSize: "15px",
      outline: "none",
    },
    evalBtn: {
      width: "100%",
      marginTop: "18px",
      padding: "12px 16px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "15px",
      color: "#fff",
      background: hoverEval ? "#1f5ae0" : "linear-gradient(180deg,#2771ff,#1f5ae0)",
      boxShadow: hoverEval ? "0 10px 30px rgba(31,90,224,0.28)" : "0 6px 18px rgba(39,113,255,0.16)",
    },
    adviceBox: {
      marginTop: "18px",
      padding: "16px",
      borderRadius: "12px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.03)",
    },
    score: { fontSize: "22px", color: "#7cc5ff", fontWeight: 800 },
    message: { marginTop: "8px", color: "#dbe7ff" },
    brandArea: {
      marginTop: "20px",
      padding: "16px",
      borderRadius: "12px",
      background: "rgba(255,255,255,0.01)",
      border: "1px solid rgba(255,255,255,0.03)",
    },
    select: {
      width: "100%",
      padding: "11px 12px",
      borderRadius: "9px",
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.02)",
      color: "#eef2ff",
      fontSize: "14.5px",
      outline: "none",
    },
    brandBtn: {
      marginTop: "12px",
      width: "100%",
      padding: "11px 12px",
      borderRadius: "10px",
      border: "none",
      fontWeight: 700,
      cursor: "pointer",
      color: "#0b1220",
      background: hoverBrandBtn ? "#3fb36a" : "#46d074",
      boxShadow: hoverBrandBtn ? "0 10px 30px rgba(70,208,116,0.2)" : "0 6px 18px rgba(70,208,116,0.12)",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header with large Prediction button on the right */}
        <div style={styles.header}>
          <div style={styles.titleBlock}>
            <h2 style={styles.title}>
              Welcome, <span style={{ color: "#7cc5ff" }}>{username}</span>
            </h2>
            <div style={styles.subtitle}>
              Evaluate your laptop deal and check brand support pages.
            </div>
          </div>

          {/* Prominent Prediction Website button (top-right) */}
          <a
            href="http://localhost:8501"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.predBtn}
            onMouseEnter={() => setHoverPredBtn(true)}
            onMouseLeave={() => setHoverPredBtn(false)}
            aria-label="Open prediction website"
          >
            <ArrowRightCircle size={18} /> Open Prediction Site
          </a>
        </div>

        {/* Inputs */}
        <div style={styles.section}>
          <div style={{ marginBottom: 12 }}>
            <div style={styles.labelRow}>
              <DollarSign size={16} />
              <span>Actual Price (₹)</span>
            </div>
            <input
              type="number"
              inputMode="decimal"
              placeholder="e.g., 55000"
              style={styles.input}
              value={actualPrice}
              onChange={(e) => setActualPrice(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: 6 }}>
            <div style={styles.labelRow}>
              <Brain size={16} />
              <span>Predicted Price (₹)</span>
            </div>
            <input
              type="number"
              inputMode="decimal"
              placeholder="e.g., 60000"
              style={styles.input}
              value={predictedPrice}
              onChange={(e) => setPredictedPrice(e.target.value)}
            />
          </div>

          <button
            onMouseEnter={() => setHoverEval(true)}
            onMouseLeave={() => setHoverEval(false)}
            style={styles.evalBtn}
            onClick={handleEvaluate}
          >
            Evaluate Deal
          </button>

          {advice && (
            <div style={styles.adviceBox}>
              <div style={styles.score}>Score: {advice.score}/10</div>
              <div style={styles.message}>{advice.message}</div>
            </div>
          )}
        </div>

        {/* Brand selection */}
        <div style={styles.brandArea}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Laptop2 size={16} />
            <strong>Check brand service availability near you</strong>
          </div>

          <select
  value={brand}
  onChange={(e) => setBrand(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #444",
    backgroundColor: "#2a2a2a", // dark dropdown background
    color: "#f1f1f1", // light text color
    fontSize: "15px",
    outline: "none",
    cursor: "pointer",
    appearance: "none",
  }}
>
  <option value="" style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}>
    -- Select a brand --
  </option>
  <option value="asus" style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}>
    ASUS
  </option>
  <option value="acer" style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}>
    Acer
  </option>
  <option
    value="lenovo"
    style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}
  >
    Lenovo
  </option>
  <option
    value="dell"
    style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}
  >
    Dell
  </option>
  <option value="hp" style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}>
    HP
  </option>
  <option
    value="razor"
    style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}
  >
    Razer
  </option>
  <option
    value="apple"
    style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}
  >
    Apple
  </option>
  <option
    value="windows"
    style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}
  >
    Windows
  </option>
  <option
    value="google"
    style={{ backgroundColor: "#2a2a2a", color: "#f1f1f1" }}
  >
    Google
  </option>
</select>

          <button
            onMouseEnter={() => setHoverBrandBtn(true)}
            onMouseLeave={() => setHoverBrandBtn(false)}
            onClick={handleBrandRedirect}
            style={styles.brandBtn}
          >
            Check Location<ExternalLink size={14} style={{ marginLeft: 8 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
