import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative text-gray-300">
      {/* Glassmorphic background layer */}
      <div className="relative max-w-6xl mx-auto px-9 py-10 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Background layer */}
        <div className="absolute inset-0 bg-[#000814] backdrop-blur-2xl rounded-xl shadow-inner border border-white/10 -z-10"></div>

        {/* About Section */}
        <div className="relative z-10">
          <a href="#" className="text-3xl font-bebas font-extrabold text-white">
            A K
          </a>
          <p className="mt-2">
            Thanks for checking out my little corner of the web 💻 Always
            learning, always adapting!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  onClick={() => navigate(link.path)}
                  className="group relative inline-flex items-center gap-1 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            {[
              {
                icon: <Github size={22} />,
                name: "GitHub",
                href: "https://github.com/atharvaKakade",
              },
              {
                icon: <Linkedin size={22} />,
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/atharvakakade/",
              },
              {
                icon: <Mail size={22} />,
                name: "Email",
                href: "mailto:kakadeatharva5@gmail.com",
              },
            ].map((social) => (
              <li key={social.name} className="flex items-center space-x-2">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center space-x-2 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                  <span className="relative">
                    {social.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 ml-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Atharva • Built with Passion & React
      </div>
    </footer>
  );
};

export default Footer;
