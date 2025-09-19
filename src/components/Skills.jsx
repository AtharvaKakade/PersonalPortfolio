import React from "react";
import {
  SiGradle,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiApachemaven,
  SiJunit5,
} from "react-icons/si";

import {
  FaJava,
  FaAws,
  FaNodeJs,
  FaDatabase,
  FaCheckCircle,
  FaTools,
  FaLeaf,
  FaProjectDiagram,
  FaCog,
  FaBrain,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import GalaxyBackground from "./GalaxyBackground";

const Skills = () => {
  const skillsArray = [
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "Spring Framework", icon: <SiSpring color="#6db33f" /> },
    { name: "Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
    { name: "Spring Security", icon: <FaShieldAlt color="#6db33f" /> },
    { name: "RESTful APIs", icon: <FaCog color="#339933" /> },
    { name: "Microservices", icon: <FaProjectDiagram color="#68A063" /> },
    {
      name: "Hibernate",
      icon: (
        <img
          src="src/assets/images/Hibernate.svg"
          alt="Jenkins"
          className="w-5 h-6"
        />
      ),
    },
    { name: "JPA", icon: <FaDatabase color="#FFFFFF" /> },
    { name: "Maven", icon: <SiApachemaven color="#C71A36" /> },
    { name: "Gradle", icon: <SiGradle color="#FFFFFF" /> },
    { name: "JUnit", icon: <SiJunit5 color="#25A162" /> },
    { name: "Mockito", icon: <FaCheckCircle color="#25A162" /> },
    { name: "MySQL", icon: <SiMysql color="#FFA500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub color="#FFFFFF" /> },
    {
      name: "Jenkins",
      icon: (
        <img
          src="src/assets/images/Jenkins_logo.svg"
          alt="Jenkins"
          className="w-5 h-6"
        />
      ),
    },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "Linux", icon: <SiLinux color="#FCC624" /> },
    { name: "Shell Scripting", icon: "" },
    { name: "Problem Solving", icon: <FaBrain color="#61DAFB" /> },
    {
      name: "Data Structures & Algorithms",
      icon: <FaProjectDiagram color="#61DAFB" />,
    },
    { name: "System Design", icon: <FaCog color="#61DAFB" /> },
    { name: "Agile / Scrum", icon: <FaUsers color="#F50057" /> },
  ];
  const ribbonContent = [
    "Dynamic",
    "Scalable",
    "Search Optimized",
    "Interactive",
    "Secure",
    "Reliable",
    "Engaging",
    "Accessible",
    "Performant",
    "Maintainable",
    "User-Friendly",
    "Modern",
    "Cloud-Ready",
    "Tested",
    "Automated",
    "Collaborative",
    "Innovative",
    "Resilient",
    "Flexible",
    "Cross-Platform",
  ];
  return (
    <div className="relative">
      <GalaxyBackground />
      <div className="mx-auto relative z-20 flex flex-col justify-center items-center text-center py-32">
        {/* Heading */}
        <div className="pb-12">
          <h2 className="text-gray-500 uppercase text-xl font-semibold py-4 tracking-widest shadow-xl ">
            skills
          </h2>

          <h1
            style={{
              backgroundImage:
                "linear-gradient(270deg, #FFFFFF, #FFC300, #FFD60A)",
              backgroundSize: "400% 400%",
              animation: "gradientMove 8s ease infinite",
            }}
            className="text-6xl font-bold bg-clip-text text-transparent"
          >
            My Dev
          </h1>

          <h1
            className="text-7xl font-serif font-extrabold italic text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #272f6f, #ec4899, #ef4444, #facc0d, #3b8c15)",
              backgroundSize: "400% 400%",
              animation: "gradientMove 8s ease infinite",
            }}
          >
            palette
          </h1>

          <style>
            {`
              @keyframes gradientMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}
          </style>
        </div>
        {/* Skills array */}
        <div className="pb-15">
          <div className="flex gap-5 flex-wrap items-center justify-center">
            {skillsArray.map((skill) => {
              return (
                <div className="flex gap-2 items-center py-2 px-3 bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] rounded-full">
                  <span>{skill.icon}</span>
                  <h3>{skill.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
        {/* crissCross bars */}
        <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>

        <div className="relative w-full py-20">
          {/* Top Ribbon */}
          <div className=" absolute left-0 overflow-hidden right-0 -rotate-4">
            <div className="flex whitespace-nowrap animate-scroll bg-gradient-to-r from-blue-600 to-blue-400 py-6 w-[200%]">
              {[...ribbonContent, ...ribbonContent].map((item, idx) => (
                <span
                  key={idx}
                  className="mx-8 text-white font-semibold uppercase tracking-wide"
                >
                  ✦ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Ribbon */}
          <div className="absolute left-0 right-0 overflow-hidden rotate-4 top-20">
            <div className="flex whitespace-nowrap animate-scroll bg-gradient-to-r from-purple-600 to-pink-500 py-6 w-[200%]">
              {[...ribbonContent, ...ribbonContent].map((item, idx) => (
                <span
                  key={idx}
                  className="mx-8 text-white font-semibold uppercase tracking-wide"
                >
                  ✦ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
