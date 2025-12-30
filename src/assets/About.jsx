import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Heading */}
      <h1 className="about-title">About Me</h1>

      {/* Profile Card */}
      <div className="about-card">
        {/* Glow */}
        <div className="card-glow"></div>

        {/* Profile Image */}
        <div className="profile-wrapper">
          <div className="profile-glow"></div>
          <img
            src="images/profilePic.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Description */}
        <p className="about-text">
          Hi, I’m <span>Subham Kumar</span>, a passionate{" "}
          <strong>Full-Stack Developer</strong> who enjoys building scalable,
          user-centric applications.
          <br />
          <br />
          I focus on solving real-world problems through clean code, thoughtful
          architecture, and modern web technologies while continuously learning
          and improving.
        </p>
      </div>

      {/* Social Links */}
      <div className="social-grid">
        {[
          {
            href: "https://linkedin.com/in/subham098",
            Icon: FaLinkedin,
            label: "LinkedIn",
          },
          {
            href: "subham.mcabhu24@gmail.com",
            Icon: FaEnvelope,
            label: "Mail",
          },
          {
            href: "https://subham001.netlify.app/",
            Icon: FaExternalLinkAlt,
            label: "Portfolio",
          },
          {
            href: "/your-resume.pdf",
            Icon: HiDocumentText,
            label: "Resume",
          },
          {
            href: "https://github.com/subham77a",
            Icon: FaGithub,
            label: "GitHub",
          },
          {
            href: "https://leetcode.com/yourusername",
            Icon: SiLeetcode,
            label: "LeetCode",
          },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <div className="social-icon">
              <Icon />
            </div>
            <span>{label}</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="about-footer">
        © {new Date().getFullYear()} Your Name · Built with React
      </footer>
    </div>
  );
};

export default About;
