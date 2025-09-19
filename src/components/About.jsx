import React from "react";
import { Linkedin, Github } from "lucide-react";
import GalaxyBackground from "./GalaxyBackground";

const About = () => {
  return (
    <section className="min-h-screen relative text-white py-20 flex flex-col items-center px-6 md:px-20 ">
      {/* Heading */}
      <GalaxyBackground />
      <div className=" relative max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            More About Me
          </p>
          <h1 className="font-bold mt-3">
            <h2 className="text-4xl md:text-5xl ">I'm Atharva,</h2>
            <span className=" text-3xl md:text-4xl bg-gradient-to-r from-[#FFC300] to-[#FFD60A] bg-clip-text text-transparent">
              Associate Software Engineer
            </span>
            <span> at </span>
            <a
              href="https://haptiq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl md:text-5xl px-1 bg-clip-text text-transparent font-serif font-extrabold italic "
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #3b82f6, #ec4899, #ef4444, #facc15)", // blue → pink → red → yellow
                backgroundSize: "400% 400%",
                animation: "gradientMove 8s ease infinite",
              }}
            >
              Haptiq
            </a>
          </h1>

          <p className="text-gray-300 mt-6 leading-relaxed">
            I'm Atharva Kakade, an MCA graduate with strong fluency in{" "}
            <span className="text-white font-semibold">Spring Boot</span> and{" "}
            <span className="text-white font-semibold">React</span>. I have
            worked on company projects involving{" "}
            <span className="text-white font-semibold">
              fintech solutions, banking software, and learning management
              systems
            </span>
            .
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Alongside development, I am also familiar with{" "}
            <span className="text-white font-semibold">DevOps tools</span> such
            as Docker and Jenkins, and I’m continuously expanding my knowledge
            in this area to build more reliable and scalable applications.
          </p>

          <p className="mt-4 font-medium text-gray-200">
            I enjoy solving real-world problems with clean, efficient code and
            always strive to keep learning, building, and improving.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-gray-400">
            <a
              href="https://linkedin.com/in/atharvaKakade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/atharvakakade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        <style>
          {`
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            `}
        </style>

        {/* Right Content (Image Card) */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
              alt="Coding"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-gray-400">Code. Learn. Build.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
