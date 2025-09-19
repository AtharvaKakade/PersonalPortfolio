import React from "react";
import GalaxyBackground from "./GalaxyBackground";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      image: "link", // replace with actual image link
      title: "E-Commerce Application",
      description:
        "Developed the backend of an E-Commerce platform using Spring Boot to handle business logic and data processing. Implemented RESTful APIs for client-server communication, validated functionality with Postman, and built key backend features like product catalog management and order processing for reliability and performance.",
      features: [
        "RESTful API implementation for client-server communication",
        "Product catalog management with advanced filtering",
        "Order processing system with payment integration",
        "Validated functionality and performance with Postman testing",
      ],
      skills: [
        { icon: "spring-icon", skill: "Spring Boot" },
        { icon: "api-icon", skill: "REST API" },
        { icon: "mysql-icon", skill: "MySQL" },
        { icon: "postman-icon", skill: "Postman" },
      ],
      techStack: ["Spring Boot", "REST API", "MySQL", "Postman"],
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      link: "https://github.com/AtharvaKakade/ECommerce-site"
    },
    {
      image: "link", // replace with actual image link
      title: "Smart Compliance Manager",
      description:
        "Currently designing a SaaS-based compliance management system inspired by Lawrbit's GCMS, aimed at simplifying regulatory tracking and task management. Planned modules include compliance scheduling, customizable workflows, and audit trails. Architecting modular REST APIs for managing users, compliance checklists, notifications, and secure document handling.",
      features: [
        "Compliance scheduling with automated notifications",
        "Customizable workflows for different regulatory requirements",
        "Comprehensive audit trails for compliance tracking",
        "Modular REST APIs for scalable system architecture",
      ],
      skills: [
        { icon: "spring-icon", skill: "Spring Boot" },
        { icon: "mysql-icon", skill: "MySQL" },
        { icon: "api-icon", skill: "REST API" },
      ],
      techStack: ["Spring Boot", "MySQL", "REST API"],
      gradient: "from-blue-500 via-indigo-600 to-purple-700",
      link:"https://github.com/AtharvaKakade/Smart-Compliance-Manager"
    },
    {
      image: "link", // replace with actual image link
      title: "The URL Shortener",
      description:
        "Developed a URL shortener backend using Spring Boot, enabling users to shorten and manage URLs efficiently. The system supports both anonymous and authenticated users, allowing registered users to create custom short URLs.",
      features: [
        "Anonymous URL Creation – Users can shorten URLs without signing up.",
        "Input Validation – Ensures valid long URLs and custom aliases.",
        "Database Integration – Stores URL mappings and user data using Database.",
        "CI/CD Pipeline – Automated testing and deployment using GitHub Actions.",
      ],
      skills: [
        { icon: "spring-icon", skill: "Spring Boot" },
        { icon: "api-icon", skill: "REST API" },
        { icon: "mysql-icon", skill: "MySQL" },
        { icon: "postman-icon", skill: "Postman" },
      ],
      techStack: ["Spring Boot", "REST API", "MySQL", "Postman"],
      gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
      link:"https://github.com/AtharvaKakade/URL-Shortener"
    },
    {
      image: "link", // replace with actual image link
      title: "Employee Management System",
      description:
        "Built an interactive desktop application using Advanced Java with AWT and Swing for GUI components like buttons, text fields, and tables. Integrated MySQL database for efficient data storage, retrieval, and manipulation, enhancing usability and system performance.",
      features: [
        "Interactive GUI with AWT and Swing components",
        "Employee data management with CRUD operations",
        "MySQL database integration for reliable data storage",
        "Enhanced system performance and user experience",
      ],
      skills: [
        { icon: "java-icon", skill: "Advanced Java" },
        { icon: "awt-icon", skill: "AWT" },
        { icon: "swing-icon", skill: "Swing" },
        { icon: "mysql-icon", skill: "MySQL" },
      ],
      techStack: ["Advanced Java", "AWT", "Swing", "MySQL"],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      link: "https://github.com/AtharvaKakade/Employee-Management-System"
    },
  ];

  const techIcons = {
    "Spring Boot": "🍃",
    "REST API": "🔗",
    MySQL: "🗄️",
    Postman: "📮",
    "Advanced Java": "☕",
    AWT: "🖼️",
    Swing: "🖥️",
    Java: "☕",
  };

  return (
    <div className="relative min-h-screen items-center justify-center overflow-hidden">
      {/* Galaxy background */}
      <GalaxyBackground />

      {/* Title */}
      <div className="relative flex justify-center text-center">
        <div className="pb-12">
          <h2 className="text-gray-500 text-xl font-semibold py-6 tracking-widest">
            PROJECTS
          </h2>

          <h1 className="text-6xl font-bold bg-gradient-to-b from-[#FFFFFF] via-[#FFC300] to-[#FFD60A] bg-clip-text text-transparent">
            The Creations
          </h1>

          <div
            className="bg-clip-text pb-5"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #3b82f6, #ec4899, #ef4444, #facc15)",
              backgroundSize: "400% 400%",
              animation: "gradientMove 8s ease infinite",
            }}
          >
            <span className="text-6xl font-serif font-extrabold italic bg-clip-text text-transparent">
              Every Project,
            </span>
            <span className="text-6xl font-serif font-extrabold italic bg-clip-text text-transparent">
              a Teacher,
            </span>
            <span className="text-6xl font-serif font-extrabold italic bg-clip-text text-transparent">
              Every
            </span>
            <span className="text-6xl font-serif font-extrabold italic bg-clip-text text-transparent">
              Line a Lesson.
            </span>
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
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`flex flex-col max-w-[1200px] lg:flex-row mb-16 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.gradient} group`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -150 : 150, // alternate left/right
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Project Image */}
            <div className="flex-1 relative min-h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-md">
                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-white/20 group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-800 rounded w-full"></div>
                    <div className="h-3 bg-gray-800 rounded w-2/3"></div>
                    <div className="flex gap-2 mt-4">
                      <div className="h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-20 flex items-center justify-center">
                        <span className="text-xs font-semibold">Live</span>
                      </div>
                      <div className="h-8 bg-gray-700 rounded-full w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="flex-1 p-8 lg:p-12 bg-black/60 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <a 
                href={project.link}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                {project.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 mb-3"
                  >
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                  >
                    <span>{techIcons[tech] || "🔧"}</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
