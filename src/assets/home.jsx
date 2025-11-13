import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#0d1117',
        minHeight: '100vh',
        color: '#e6edf3',
      }}
    >
      {/* ===== Hero Section ===== */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '8rem 1rem',
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #111827 100%)',
          boxShadow: '0 6px 30px rgba(0,0,0,0.6)',
        }}
      >
        <h1
          style={{
            fontSize: '3.2rem',
            marginBottom: '1rem',
            fontWeight: '700',
            letterSpacing: '1px',
            color: '#f3f4f6',
          }}
        >
          Welcome to My Laptop-buy-guide ⚡
        </h1>
        <p
          style={{
            maxWidth: '850px',
            fontSize: '1.15rem',
            lineHeight: '1.9',
            color: '#cbd5e1',
          }}
        >
          Dive into a sleek and powerful React environment designed to be fast,
          responsive, and immersive. This space highlights real project visuals,
          development insights, and app features — all crafted for clarity and
          modern aesthetics.
        </p>
        <button
          onClick={handleClick}
          style={{
            marginTop: '3rem',
            padding: '1rem 2.8rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#fff',
            backgroundColor: '#2563eb',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#3b82f6')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
        >
          Get Started
        </button>
      </section>

      {/* ===== About Section ===== */}
      <section
        style={{
          padding: '6rem 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: '600',
            marginBottom: '2rem',
            color: '#f3f4f6',
          }}
        >
          A Platform Built for Innovation
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            maxWidth: '850px',
            margin: '0 auto',
            color: '#9ca3af',
            lineHeight: '1.8',
          }}
        >
          Here you can explain your app, purpose, or idea in depth. This section is
          intentionally spaced for long-form text, allowing you to share the project
          story, technology stack, or goals. Add as many paragraphs as you need —
          this area is designed to expand naturally for reading comfort.
        </p>
      </section>

      {/* ===== Vertical Feature Highlights ===== */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
          padding: '2rem 2rem 6rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            style={{
              backgroundColor: '#161b22',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.01)';
              e.currentTarget.style.boxShadow =
                '0 12px 35px rgba(0,0,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow =
                '0 8px 25px rgba(0,0,0,0.4)';
            }}
          >
            <div
              style={{
                width: '100%',
                height: '600px', // Large height for 1920x1200 screenshots
                background: `url('https://source.unsplash.com/1920x1200/?coding,tech,${num}') center/cover no-repeat`,
                borderBottom: '2px solid #1f2937',
              }}
            ></div>
            <div
              style={{
                padding: '2rem 2.5rem',
                textAlign: 'left',
              }}
            >
              <h3
                style={{
                  fontSize: '1.6rem',
                  marginBottom: '1rem',
                  color: '#f3f4f6',
                }}
              >
                Feature Highlight {num}
              </h3>
              <p
                style={{
                  color: '#9ca3af',
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                }}
              >
                This section showcases a feature or visual from your app in full width
                and height. You can use real screenshots or high-resolution renders here
                — perfect for detailed previews. Add any accompanying explanation,
                context, or notes about functionality and design choices.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== Footer ===== */}
      <footer
        style={{
          backgroundColor: '#0a0f16',
          color: '#8b949e',
          textAlign: 'center',
          padding: '2rem 1rem',
          fontSize: '0.9rem',
          borderTop: '1px solid #1f2937',
        }}
      >
        © 2025 MyWebsite — Built with ⚡ React | Designed for Dark Mode Excellence
      </footer>
    </div>
  );
};

export default Home;
