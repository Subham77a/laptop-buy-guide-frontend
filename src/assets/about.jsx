import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100 flex flex-col items-center py-20 px-6">
      {/* Header */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider drop-shadow-lg">
        About Me
      </h1>

      {/* About Details */}
      <div className="max-w-3xl text-center leading-relaxed text-gray-300 text-lg md:text-xl mb-16 px-4 backdrop-blur-sm bg-white/5 p-6 rounded-2xl shadow-lg border border-gray-700">
        Hi, I'm{" "}
        <span className="text-cyan-400 font-semibold">Your Name</span> — a
        passionate <span className="text-blue-400">Full-Stack Developer</span> 
        dedicated to crafting intuitive and responsive digital experiences.
        I enjoy solving real-world problems through clean code, efficient design,
        and continuous learning.
      </div>

      {/* Profile Picture */}
      <div className="relative mb-16">
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-40"></div>
        <img
          src="/your-photo.jpg"
          alt="Your Profile"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-400 shadow-[0_0_25px_rgba(0,255,255,0.3)] object-cover relative z-10"
        />
      </div>

      {/* Social & Resource Links */}
      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {[
          {
            href: "https://linkedin.com/in/yourprofile",
            Icon: FaLinkedin,
            label: "LinkedIn",
            color: "hover:text-blue-400",
          },
          {
            href: "mailto:youremail@example.com",
            Icon: FaEnvelope,
            label: "Mail",
            color: "hover:text-cyan-400",
          },
          {
            href: "https://yourportfolio.com",
            Icon: FaExternalLinkAlt,
            label: "Portfolio",
            color: "hover:text-purple-400",
          },
          {
            href: "/your-resume.pdf",
            Icon: HiDocumentText,
            label: "Resume",
            color: "hover:text-green-400",
          },
          {
            href: "https://github.com/yourusername",
            Icon: FaGithub,
            label: "GitHub",
            color: "hover:text-gray-400",
          },
          {
            href: "https://leetcode.com/yourusername",
            Icon: SiLeetcode,
            label: "LeetCode",
            color: "hover:text-yellow-400",
          },
        ].map(({ href, Icon, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center transition-transform transform hover:scale-110 ${color}`}
          >
            <div className="p-4 bg-gray-800 hover:bg-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <Icon className="text-4xl" />
            </div>
            <span className="mt-2 text-sm tracking-wide">{label}</span>
          </a>
        ))}
      </div>

      {/* Subtle Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name — Built with ❤️ using React
      </footer>
    </div>
  );
};

export default About;
