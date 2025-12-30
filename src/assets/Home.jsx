import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* ================= HERO ================= */}
      <section className="hero">
        <h1>LapWise: An Intelligent & Educational Laptop Advisor</h1>
        <p>
          We don’t just predict laptop prices — we help you understand what
          specifications actually matter, so you can make informed decisions
          and avoid marketing traps.
        </p>
        <button onClick={() => navigate("/Signup")}>Get Started</button>
      </section>

      {/* ================= USAGE ================= */}
      <GuideBlock
        title="We’ve Got a Laptop for Every Use"
        subtitle="Choose based on what you actually do — not confusing specs."
        points={[
          "Everyday Use – Browsing, emails, OTT, MS Office",
          "Business – Documents, presentations, multitasking",
          "Studying – Online classes, assignments, research",
          "Gaming – High performance CPU & dedicated GPU",
          "Designing & Video Editing – 4K editing, 3D animation, professional tools",
          "Recommended for creators: 32GB RAM, 15.6”–17.3” display"
        ]}
        image="/images/laptop.jpg"
      />

      {/* ================= OS ================= */}
      <GuideBlock
        title="Choose the Right Operating System"
        subtitle="Your OS defines compatibility, ecosystem, and long-term comfort."
        points={[
          "macOS – Exclusive to Apple, stable and user-friendly",
          "Best if you already use iPhone, iPad, or Apple Watch",
          "MacBook Air – Browsing, office work, light editing",
          "MacBook Pro – Heavy apps, editing, development, design",
          "Windows – Most versatile, widest software support",
          "ChromeOS – Lightweight, best for students and basic usage"
        ]}
        image="/images/operating-system.jpg"
        reverse
      />

      {/* ================= PROCESSOR ================= */}
      <GuideBlock
        title="Processor (The Brain)"
        subtitle="The processor determines how fast your laptop can think."
        points={[
          "Clock Speed (GHz): Higher GHz = faster single-task performance",
          "Cores & Threads: More cores allow smoother multitasking",
          "Intel Core i3 / Ryzen 3 – Basic tasks",
          "Intel Core i5 / Ryzen 5 – Balanced performance",
          "Intel Core i7 / Ryzen 7 – Heavy workloads & gaming",
          "U-Series CPUs focus on battery life",
          "H / HX-Series CPUs focus on raw performance"
        ]}
        image="/images/processor.jpg"
      />

      {/* ================= RAM ================= */}
      <GuideBlock
        title="RAM (Your Workspace)"
        subtitle="More RAM means smoother multitasking."
        points={[
          "4GB – Only for very basic browsing (not recommended in 2025)",
          "8GB – Minimum for students and office work",
          "16GB – Sweet spot for developers & creators",
          "32GB+ – Required for professional editing, CAD, virtual machines",
          "Always check if RAM is expandable before buying"
        ]}
        image="/images/ram.jpg"
        reverse
      />

      {/* ================= STORAGE ================= */}
      <GuideBlock
        title="Storage (SSD vs HDD)"
        subtitle="Storage speed affects performance more than most people realize."
        points={[
          "SSD – Faster boot times and instant app launches",
          "HDD – Only useful as secondary storage",
          "Never buy a laptop with only HDD in 2025",
          "Recommended minimum: 512GB SSD"
        ]}
        image="/images/storage.jpg"
      />

      {/* ================= GRAPHICS ================= */}
      <GuideBlock
        title="Graphics (GPU)"
        subtitle="Responsible for visuals, gaming, and rendering performance."
        points={[
          "Integrated Graphics – Enough for everyday use, office work, media",
          "Uses system RAM and CPU power",
          "Dedicated Graphics – Required for gaming, video editing, 3D work",
          "Has its own GPU and VRAM for faster performance"
        ]}
        image="/images/gpu.jpg"
        reverse
      />

      {/* ================= SCREEN SIZE ================= */}
      <GuideBlock
        title="Screen Size"
        subtitle="Choose comfort vs portability."
        points={[
          "11–13 inch – Compact, ideal for students and travel",
          "14–16 inch – Most popular, balanced portability & usability",
          "17–19 inch – Large and heavy, ideal for gaming & creative work"
        ]}
        image="/images/screen-size.jpg"
      />

      {/* ================= RESOLUTION ================= */}
      <GuideBlock
        title="Display Resolution"
        subtitle="Higher resolution means sharper visuals."
        points={[
          "HD – Suitable only for basic usage",
          "Full HD (1080p) – Standard for most users",
          "QHD / 4K – Best for professional editing, gaming, and design",
          "Avoid low-resolution panels for long working hours"
        ]}
        image="/images/displayresolution.jpg"
        reverse
      />

      {/* ================= FORM FACTOR ================= */}
      <GuideBlock
        title="Form Factor"
        subtitle="Design, weight, and flexibility matter."
        points={[
          "Notebook – Classic design, easy to use",
          "Thin & Light – Portable and travel-friendly",
          "Touchscreen – Added convenience",
          "2-in-1 – Converts into a tablet",
          "Gaming Laptops – Performance-oriented and heavy"
        ]}
        image="/images/form-factor.png"
      />

      {/* ================= ADDITIONAL FEATURES ================= */}
      <GuideBlock
        title="Additional Features That Matter"
        subtitle="Small things that make a big difference long-term."
        points={[
          "Body Material – Aluminium is more durable than plastic",
          "Keyboard – Backlit keyboards improve usability",
          "Battery – Higher capacity = better portability",
          "Ports – USB, HDMI, Type-C, Thunderbolt matter",
          "Included Software – MS Office & antivirus add value",
          "Disc Drive – Only required for legacy software or discs"
        ]}
        image="/images/last.png"
        reverse
      />

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Make Smarter Laptop Decisions</h2>
        <p>
          Our platform combines machine learning predictions with human-friendly
          explanations — so you never buy blindly again.
        </p>
        <button onClick={() => navigate("/Signup")}>
          Start Exploring 🚀
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        © 2025 Laptop Buy Guide · Educating Before Recommending
      </footer>

    </div>
  );
};

/* ========== REUSABLE SECTION COMPONENT ========== */
const GuideBlock = ({ title, subtitle, points, image, reverse }) => {
  return (
    <section className={`guide ${reverse ? "reverse" : ""}`}>
      <div className="guide-text">
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <ul>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="guide-image">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default Home;
