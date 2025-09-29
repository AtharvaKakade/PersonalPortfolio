import { Copy, MapPinHouse } from "lucide-react";
import React, { useState } from "react";
import { SiVercel, SiNetlify } from "react-icons/si";
import confetti from "canvas-confetti";
import { FaSpinner } from "react-icons/fa";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SiSpringboot, SiReact, SiTailwindcss } from "react-icons/si";
import {
  SiRedux,
  SiSpringsecurity,
  SiRedis,
  SiGithubactions,
  SiNotion,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import Toast from "../toast/Toast";
import GalaxyBackground from "./GalaxyBackground";

const CardLayoutSection = () => {
  const email = "kakadeatharva5@gmail.com";
  const [showToast, setShowToast] = useState(false);
  const dropVariants = {
    hidden: { y: -100, opacity: 0 }, // start above card
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
        delay: i * 0.2, // stagger each icon
      },
    }),
  };
  const items = [
    {
      Icon: SiSpringboot,
      color: "text-green-500",
      text: "Powering the Backend",
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    {
      Icon: SiReact,
      color: "text-sky-400",
      text: "Driving the Frontend",
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    {
      Icon: SiTailwindcss,
      color: "text-blue-500",
      text: "Styling with Speed",
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      console.log("copied");
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
      });

      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (error) {
      console.log("Failed to copy email:", error);
    }
  };
  const compliancePoints = [
    {
      heading: "Tracking",
      info: "Automates compliance tracking and monitoring",
      icon: "Search",
      color: "text-blue-500 bg-blue-100",
    },
    {
      heading: "Policies",
      info: "Centralizes policy and document management",
      icon: "FileText",
      color: "text-green-500 bg-green-100",
    },
    {
      heading: "Reporting",
      info: "Generates audit-ready reports instantly",
      icon: "BarChart",
      color: "text-purple-500 bg-purple-100",
    },
    {
      heading: "Risk",
      info: "Monitors risks and sends proactive alerts",
      icon: "AlertTriangle",
      color: "text-red-500 bg-red-100",
    },
    {
      heading: "Workflows",
      info: "Automates compliance workflows and tasks",
      icon: "Workflow",
      color: "text-yellow-500 bg-yellow-100",
    },
    {
      heading: "Access",
      info: "Provides role-based access control",
      icon: "Lock",
      color: "text-indigo-500 bg-indigo-100",
    },
    {
      heading: "Analytics",
      info: "Offers real-time dashboards and analytics",
      icon: "PieChart",
      color: "text-pink-500 bg-pink-100",
    },
    {
      heading: "Integration",
      info: "Integrates with existing business tools",
      icon: "Plug",
      color: "text-teal-500 bg-teal-100",
    },
    {
      heading: "Versioning",
      info: "Maintains version control and audit trails",
      icon: "GitBranch",
      color: "text-orange-500 bg-orange-100",
    },
    {
      heading: "Scalability",
      info: "Scales easily as the organization grows",
      icon: "TrendingUp",
      color: "text-cyan-500 bg-cyan-100",
    },
  ];

  const fullStack = [
    {
      id: 1,
      name: "HTML5",
      icon: <i className="devicon-html5-plain colored"></i>,
    },
    {
      id: 2,
      name: "CSS3",
      icon: <i className="devicon-css3-plain colored"></i>,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <i className="devicon-javascript-plain colored"></i>,
    },
    {
      id: 4,
      name: "React",
      icon: <i className="devicon-react-original colored"></i>,
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: <i className="devicon-bootstrap-plain colored"></i>,
    },
    {
      id: 6,
      name: "Tailwind",
      icon: <i className="devicon-tailwindcss-original colored"></i>,
    },
    {
      id: 7,
      name: "Java",
      icon: <i className="devicon-java-plain colored"></i>,
    },
    {
      id: 8,
      name: "Python",
      icon: <i className="devicon-python-plain colored"></i>,
    },
    {
      id: 9,
      name: "Spring Boot",
      icon: <i className="devicon-spring-plain colored"></i>,
    },
    {
      id: 10,
      name: "Hibernate",
      icon: <i className="devicon-hibernate-plain colored"></i>,
    },

    // Databases
    {
      id: 11,
      name: "MySQL",
      icon: <i className="devicon-mysql-plain colored"></i>,
    },
    {
      id: 12,
      name: "MongoDB",
      icon: <i className="devicon-mongodb-plain colored"></i>,
    },
    {
      id: 13,
      name: "PostgreSQL",
      icon: <i className="devicon-postgresql-plain colored"></i>,
    },
  ];

  const techs = [
    // --- Existing stack items go here ---

    // 🔹 New Additions
    {
      id: "redux-toolkit",
      name: "Redux Toolkit",
      icon: <SiRedux className="text-[#764ABC]" />,
    },
    {
      id: "spring-security",
      name: "Spring Security + JWT/OAuth2",
      icon: <SiSpringsecurity className="text-green-600" />, // Spring logo
    },
    {
      id: "microservices",
      name: "Microservices",
      icon: <FaProjectDiagram className="text-yellow-500" />, // Diagram icon
    },
    {
      id: "redis",
      name: "Redis",
      icon: <SiRedis className="text-[#DC382D]" />,
    },
    {
      id: "ci-cd",
      name: "CI/CD",
      icon: <SiGithubactions className="text-[#2088FF]" />, // Or SiJenkins
    },
    {
      id: "notion",
      name: "Notion",
      icon: <SiNotion className="text-black dark:text-white" />,
    },
  ];

  const techStack = [
    // Frontend

    // Backend / Languages

    // DevOps / Tools
    {
      id: 14,
      name: "Git",
      icon: <i className="devicon-git-plain colored"></i>,
    },
    {
      id: 15,
      name: "GitHub",
      icon: <i className="devicon-github-original colored"></i>,
    },
    {
      id: 16,
      name: "Docker",
      icon: <i className="devicon-docker-plain colored"></i>,
    },
    {
      id: 17,
      name: "Jenkins",
      icon: <i className="devicon-jenkins-plain colored"></i>,
    },

    // Hosting (React Icons)
    { id: 18, name: "Vercel", icon: <SiVercel className="text-black" /> },
    { id: 19, name: "Netlify", icon: <SiNetlify className="text-blue-500" /> },
  ];

  return (
    <div className="relative">
      <GalaxyBackground />
      <div className="w-full h-full relative flex items-center justify-center py-5 px-4 md:px-0">
        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid w-[1200px] h-[1200px] grid-cols-5 grid-rows-5 gap-5 bg-[#000814]">
          {/* Exploring section */}
          <div
            className="relative col-start-1 col-end-4 row-start-1 row-end-3 w-full h-full flex flex-col justify-center items-center rounded-xl
  bg-gradient-to-b from-[#1c1a73]  to-[#000000]
  hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300
  shadow-[inset_0_0_15px_#003566]"
          >
            <h1 className="text-4xl font-bold text-center pb-3 bg-gradient-to-b from-white to-[#FFC300] bg-clip-text text-transparent leading-[3.25rem]">
              Exploring New Frontiers <br /> in Technology <br />
              Every Day!
            </h1>
            <div className="w-full overflow-hidden  py-2">
              <div className="flex flex-col gap-13">
                <div className="w-full overflow-hidden">
                  <div className="flex animate-slide-left w-max">
                    {fullStack.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex justify-center items-center gap-2 mx-10 px-6 py-2 
                   bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                   rounded-full text-white whitespace-nowrap"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}

                    {fullStack.map((tech) => (
                      <div
                        key={`dup-${tech.id}`}
                        className="flex justify-center items-center gap-2 mx-10 px-6 py-2 
                   bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                   rounded-full text-white whitespace-nowrap"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full overflow-hidden">
                  <div className="flex animate-slide-right w-max">
                    {techs.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex justify-center items-center gap-2 mx-10 px-6 py-2 
                   bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                   rounded-full text-white whitespace-nowrap"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}

                    {techs.map((tech) => (
                      <div
                        key={`dup-${tech.id}`}
                        className="flex justify-center items-center gap-2 mx-10 px-6 py-2 
                   bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                   rounded-full text-white whitespace-nowrap"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full overflow-hidden">
                  <div className="flex animate-slide-left w-max">
                    {techStack.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex justify-center items-center gap-2 mx-10 px-6 py-2 
                   bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                   rounded-full text-white whitespace-nowrap"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}

                    {techStack.map((tech) => (
                      <div
                        key={`dup-${tech.id}`}
                        className="flex justify-center items-center gap-2 mx-10 px-6 py-2 
                   bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                   rounded-full text-white whitespace-nowrap"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                @keyframes slide-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                @keyframes slide-right {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                @keyframes slide-fast {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                @keyframes slide-slow {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .animate-scroll {
                  animation: scroll 15s linear infinite;
                }

                .animate-slide-left {
                  animation: slide-left 28s linear infinite;
                }

                .animate-slide-right {
                  animation: slide-right 25s linear infinite;
                }

                .animate-slide-fast {
                  animation: slide-fast 8s linear infinite;
                }

                .animate-slide-slow {
                  animation: slide-slow 30s linear infinite;
                }
              `}</style>
            </div>
          </div>
          {/* Freelancing card */}
          <div className="relative bg-gradient-to-b from-[#1c1a73] to-[#000000] hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300 col-start-4 col-end-6 row-start-1 row-end-4 w-full h-full flex flex-col items-center justify-start rounded-xl shadow-[inset_0_0_15px_#003566] overflow-hidden">
            {/* Content goes here */}
            <div className="z-10 p-6 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-b pt-[25px] pb-4 from-white to-[#FFC300] bg-clip-text text-transparent leading-[3.25rem]">
                Exploring <br />
                Global Tech Horizons,
                <br /> Ready to Build
              </h1>

              <div className="mb-3">
                <h2 className="pt-9 text-3xl pb-4 font-bold [text-shadow:_0_1px_2px_#FFFFFF] text-[#FFFFFF]">
                  Flexible with time zones
                </h2>
                <div className="flex gap-9 justify-center text-[#FFFFFF]">
                  <div className="flex justify-center items-center gap-2 bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] py-1.5 px-2 rounded">
                    <span className="fi fi-in"></span>
                    <span>India</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] py-1.5 px-2 rounded">
                    <span class="fi fi-us"></span>
                    <span>US</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] py-1.5 px-2 rounded">
                    <span class="fi fi-gb"></span>
                    <span>UK</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group flex flex-col items-center justify-center p-6 w-full cursor-pointer">
              <MapPinHouse className="text-white" />
              <h3 className="text-3xl font-bold text-white px-3 py-1 rounded">
                Remote
              </h3>

              <h4 className="text-gray-300">Pune, India</h4>

              <button className="mt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-yellow-400 text-black font-semibold px-4 py-2 rounded transition-opacity duration-300">
                Click Me
              </button>
            </div>

            {/* Image fixed at bottom as background */}
            <img
              src="\images\global.jpg"
              alt="global"
              className="absolute bottom-0 left-0 w-full h-1/2 object-cover rounded-b-xl"
              style={{
                maskImage:
                  "linear-gradient(to top, black 0%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative bg-gradient-to-b from-[#1c1a73] via-[#000814] to-[#000000] hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300 col-start-1 col-end-3 row-start-3 row-end-6 w-full h-full flex justify-center rounded-xl shadow-[inset_0_0_15px_#003566] overflow-hidden">
            {/* Content always on top */}
            <div className="relative z-10 p-6 text-center pt-20">
              <h1 className="text-4xl font-bold bg-gradient-to-b from-white to-[#FFC300] bg-clip-text text-transparent pb-7 leading-13">
                Full Stack <br />
                Development
              </h1>
              <p className="text-xl bg-gradient-to-b from-white to-[#FFC300] bg-clip-text text-transparent">
                From backend APIs to responsive frontends, I build complete
                applications using modern frameworks and best practices.
              </p>
              <div>
                <h2 className="text-2xl font-bold pt-10 pb-6 bg-gradient-to-b from-[#FFC300] via-[#FFD60A] to-[#FFF2A1] bg-clip-text text-transparent">
                  My Most Trusted Gear!
                </h2>
                <div className="flex justify-center flex-wrap gap-6 items-center">
                  {items.map(({ Icon, color, text, initial, animate }, i) => (
                    <motion.div
                      key={i}
                      initial={initial}
                      animate={animate}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: i * 0.4,
                      }}
                      className="flex items-center"
                    >
                      <div className="flex items-center">
                        <Icon className={`text-5xl ${color}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced image blending */}
            <div className="absolute bottom-0 left-0 w-full h-1/2">
              <img
                src="/images/lanscape_perspective_grid.jpg"
                alt="blended"
                className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
                style={{
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                  opacity: 0.7,
                }}
              />
              {/* Subtle blending overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/30 via-[#000814]/15 to-transparent mix-blend-multiply"></div>
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-[#1c1a73] to-[#000000] hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300 col-start-3 col-end-6 row-start-4 row-end-6 w-full h-full flex rounded-xl shadow-[inset_0_0_15px_#003566] overflow-hidden">
            {/* Background Cards */}
            <div className="absolute inset-0 z-0 flex animate-slide pt-8 blur-[1px] ">
              {compliancePoints.map((point, idx) => {
                const Icon = Icons[point.icon]; // ✅ define Icon here
                return (
                  <div
                    key={idx}
                    classNam
                    Continuous
                    Sliding
                    Examples
                    e="min-w-[200px] max-h-[260px] bg-gradient-to-b from-[#000814]/50 to-[#003566]/0 rounded-xl mx-2 shadow-lg"
                  >
                    <div className="flex flex-col justify-center text-center py-5 px-4 ">
                      <div className="flex flex-col items-center gap-2">
                        {/* ✅ Render the icon */}
                        <div className={`p-3 rounded-full text-[#FFFFFF]/30`}>
                          <Icon className="w-8 h-8 " />
                        </div>
                        <h1 className="text-2xl font-semibold text-white/40">
                          {point.heading}
                        </h1>
                      </div>
                      <p className="py-3 font-bold  text-[#FFFFFF]/40 ">
                        {point.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col justify-end px-7 pb-12">
              <div className="flex gap-3 items-center mb-3">
                <FaSpinner className="animate-spin text-2xl text-[#FFC300]/50" />
                <h2
                  className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold 
                        *:font-bold bg-gradient-to-b  from-white to-[#FFC300]/50 bg-clip-text text-transparent"
                >
                  Under the Hood
                </h2>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFC300] bg-clip-text text-transparent">
                Working on a SaaS application that helps automating compliance
                and make audits painless..
              </h1>
            </div>
            <style jsx>{`
              @keyframes slide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-slide {
                animation: slide 15s linear infinite;
              }
            `}</style>
          </div>

          <div
            className="relative col-start-3 col-end-3 row-start-3 row-end-3 w-full h-full flex
             rounded-xl shadow-[inset_0_0_15px_#003566] 
             bg-[#001D3D]/80 bg-cover bg-center bg-blend-darken 
             hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300 overflow-hidden"
            style={{
              backgroundImage: "url('/images/clothbg.jpg')",
            }}
          >
            {/* Optional stronger gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1a73]/30 to-[#000000]/60 rounded-xl mix-blend-multiply"></div>

            <div className="relative z-10 flex flex-col justify-center text-center">
              <h1
                className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold 
                        *:font-bold bg-gradient-to-b  from-white to-[#FFC300] bg-clip-text text-transparent mb-4"
              >
                Open to collaborate,
                <br /> Ready to build!
              </h1>
              <div
                className="inline-flex items-center justify-center gap-2 cursor-pointer 
             bg-[#000814] hover:bg-white/20 px-2 py-1 rounded-lg 
             transition-all duration-200 mx-auto shadow-[inset_0_0_15px_#003566]"
                onClick={handleCopy}
              >
                <span className="text-base text-[#FFD60A]">
                  <Copy />
                </span>
                <h3 className="text-[10px] text-[#FFD60A]">
                  kakadeatharva5@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (sm to lg) */}
        <div className="lg:hidden w-full max-w-md space-y-5 bg-[#000814] p-4 rounded-xl">
          {/* Exploring section - Mobile */}
          <div
            className="relative w-full min-h-[400px] flex flex-col justify-center items-center rounded-xl
            bg-gradient-to-b from-[#1c1a73] to-[#000000]
            hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300
            shadow-[inset_0_0_15px_#003566] p-4"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-center pb-3 bg-gradient-to-b from-white to-[#FFC300] bg-clip-text text-transparent leading-8">
              Exploring New Frontiers <br /> in Technology <br />
              Every Day!
            </h1>
            <div className="w-full overflow-hidden py-2">
              <div className="flex flex-col gap-3">
                <div className="w-full overflow-hidden">
                  <div className="flex animate-slide-left w-max">
                    {fullStack.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex justify-center items-center gap-2 mx-3 px-3 py-1 
                         bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                         rounded-full text-white whitespace-nowrap text-sm"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                    {fullStack.map((tech) => (
                      <div
                        key={`dup-${tech.id}`}
                        className="flex justify-center items-center gap-2 mx-3 px-3 py-1 
                         bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                         rounded-full text-white whitespace-nowrap text-sm"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full overflow-hidden">
                  <div className="flex animate-slide-right w-max">
                    {techs.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex justify-center items-center gap-2 mx-3 px-3 py-1 
                         bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                         rounded-full text-white whitespace-nowrap text-sm"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                    {techs.map((tech) => (
                      <div
                        key={`dup-${tech.id}`}
                        className="flex justify-center items-center gap-2 mx-3 px-3 py-1 
                         bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                         rounded-full text-white whitespace-nowrap text-sm"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full overflow-hidden">
                  <div className="flex animate-slide-left w-max">
                    {techStack.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex justify-center items-center gap-2 mx-3 px-3 py-1 
                         bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                         rounded-full text-white whitespace-nowrap text-sm"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                    {techStack.map((tech) => (
                      <div
                        key={`dup-${tech.id}`}
                        className="flex justify-center items-center gap-2 mx-3 px-3 py-1 
                         bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] 
                         rounded-full text-white whitespace-nowrap text-sm"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Freelancing card - Mobile */}
          <div className="relative bg-gradient-to-b from-[#1c1a73] to-[#000000] hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300 w-full min-h-[400px] flex flex-col items-center justify-start rounded-xl shadow-[inset_0_0_15px_#003566] overflow-hidden">
            <div className="z-10 p-4 text-center">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-b pt-6 pb-4 from-white to-[#FFC300] bg-clip-text text-transparent leading-8">
                Exploring <br />
                Global Tech Horizons,
                <br /> Ready to Build
              </h1>

              <div className="mb-3">
                <h2 className="pt-6 text-xl md:text-2xl pb-4 font-bold [text-shadow:_0_1px_2px_#FFFFFF] text-[#FFFFFF]">
                  Flexible with time zones
                </h2>
                <div className="flex gap-3 justify-center text-[#FFFFFF] text-sm">
                  <div className="flex justify-center items-center gap-1 bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] py-1 px-2 rounded">
                    <span className="fi fi-in"></span>
                    <span>India</span>
                  </div>
                  <div className="flex justify-center items-center gap-1 bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] py-1 px-2 rounded">
                    <span className="fi fi-us"></span>
                    <span>US</span>
                  </div>
                  <div className="flex justify-center items-center gap-1 bg-[#000814]/35 shadow-[inset_0_0px_19px_#003566] py-1 px-2 rounded">
                    <span className="fi fi-gb"></span>
                    <span>UK</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 w-full cursor-pointer">
              <MapPinHouse className="text-white" />
              <h3 className="text-2xl font-bold text-white px-3 py-1 rounded">
                Remote
              </h3>
              <h4 className="text-gray-300">Pune, India</h4>
              <button className="mt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-yellow-400 text-black font-semibold px-4 py-2 rounded transition-opacity duration-300">
                Click Me
              </button>
            </div>
            <img
              src="\images\global.jpg"
              alt="global"
              className="absolute bottom-0 left-0 w-full h-1/3 object-cover rounded-b-xl"
              style={{
                maskImage:
                  "linear-gradient(to top, black 0%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, transparent 100%)",
              }}
            />
          </div>

          {/* Full Stack Development - Mobile */}
          <div className="relative bg-gradient-to-b from-[#1c1a73] via-[#000814] to-[#000000] hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300 w-full min-h-[400px] flex justify-center rounded-xl shadow-[inset_0_0_15px_#003566] overflow-hidden">
            <div className="relative z-10 p-4 text-center pt-10">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-[#FFC300] bg-clip-text text-transparent pb-4 leading-8">
                Full Stack <br />
                Development
              </h1>
              <p className="text-base md:text-lg bg-gradient-to-b from-white to-[#FFC300] bg-clip-text text-transparent">
                From backend APIs to responsive frontends, I build complete
                applications using modern frameworks and best practices.
              </p>
              <div>
                <h2 className="text-lg md:text-xl font-bold pt-8 pb-4 bg-gradient-to-b from-[#FFC300] via-[#FFD60A] to-[#FFF2A1] bg-clip-text text-transparent">
                  My Most Trusted Gear!
                </h2>
                <div className="flex justify-center gap-4 items-center">
                  {items.map(({ Icon, color, text, initial, animate }, i) => (
                    <motion.div
                      key={i}
                      initial={initial}
                      animate={animate}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: i * 0.4,
                      }}
                      className="flex items-center"
                    >
                      <div className="flex items-center">
                        <Icon className={`text-3xl md:text-4xl ${color}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <img
              src="/images/lanscape_perspective_grid.jpg"
              alt="blended"
              className="absolute bottom-0 left-0 w-full h-1/3 object-cover rounded-b-xl shadow-[inset_0_0_15px_#003566]"
              style={{
                maskImage:
                  "linear-gradient(to top, black 0%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, transparent 100%)",
                opacity: 0.6,
              }}
            />
          </div>

          {/* Under the Hood - Mobile */}
          <div className="relative bg-gradient-to-b from-[#1c1a73] to-[#000000] hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300 w-full min-h-[300px] flex rounded-xl shadow-[inset_0_0_15px_#003566] overflow-hidden">
            <div className="absolute inset-0 z-0 flex animate-slide pt-4 blur-[0.5px]">
              {compliancePoints.map((point, idx) => {
                const Icon = Icons[point.icon];
                return (
                  <div
                    key={idx}
                    className="min-w-[150px] max-h-[200px] bg-gradient-to-b from-[#000814]/50 to-[#003566]/0 rounded-xl mx-1 shadow-lg"
                  >
                    <div className="flex flex-col justify-center text-center py-3 px-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className={`p-2 rounded-full text-[#FFFFFF]/30`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h1 className="text-lg font-semibold text-white/40">
                          {point.heading}
                        </h1>
                      </div>
                      <p className="py-2 text-sm font-bold text-[#FFFFFF]/40">
                        {point.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative z-10 flex flex-col justify-end p-4 pb-8">
              <div className="flex gap-2 items-center mb-2">
                <FaSpinner className="animate-spin text-lg text-[#FFC300]/50" />
                <h2 className="text-lg font-bold bg-gradient-to-b from-white to-[#FFC300]/50 bg-clip-text text-transparent">
                  Under the Hood
                </h2>
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFC300] bg-clip-text text-transparent">
                Working on a SaaS application that helps automating compliance
                and make audits painless..
              </h1>
            </div>
          </div>

          {/* Contact Card - Mobile */}
          <div
            className="relative w-full min-h-[200px] flex
             rounded-xl shadow-[inset_0_0_15px_#003566] 
             bg-[#001D3D]/80 bg-cover bg-center bg-blend-darken 
             hover:animate-[blink_1s_infinite] hover:scale-101 transition-transform duration-300 overflow-hidden"
            style={{
              backgroundImage: "url('/images/clothbg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1a73]/30 to-[#000000]/60 rounded-xl mix-blend-multiply"></div>
            <div className="relative z-10 flex flex-col justify-center text-center p-4 w-full">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-b from-white to-[#FFC300] bg-clip-text text-transparent mb-4">
                Open to collaborate,
                <br /> Ready to build!
              </h1>
              <div
                className="inline-flex items-center justify-center gap-2 cursor-pointer 
                 bg-[#000814] hover:bg-white/20 px-3 py-2 rounded-lg 
                 transition-all duration-200 mx-auto shadow-[inset_0_0_15px_#003566]"
                onClick={handleCopy}
              >
                <span className="text-sm text-[#FFD60A]">
                  <Copy />
                </span>
                <h3 className="text-xs text-[#FFD60A]">
                  kakadeatharva5@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </div>

        <Toast
          message="Email address copied sucessfully!"
          isVisible={showToast}
        />
      </div>
    </div>
  );
};
export default CardLayoutSection;
