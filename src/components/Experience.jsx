import { MapPin, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import GalaxyBackground from "./GalaxyBackground";

const Experience = () => {
  const experience = [
    {
      timeline: "July 2025 - Present",
      organization: "Haptiq",
      location: "Pune City, India",
      workMode: "OnSite",
      role: "Associate Software Engineer",
      description: `Currently undergoing full-stack development training and actively exploring Generative AI technologies. 
  My focus is on building robust backend services using Spring Boot and creating dynamic frontends with React and Tailwind CSS. 
  I am learning to design RESTful APIs, integrate databases efficiently using Hibernate, and implement authentication and 
  authorization mechanisms.  

  As part of my training, I practice implementing scalable software architecture, writing unit tests with JUnit, and following 
  best coding practices. I also explore DevOps workflows, including CI/CD pipelines, version control with Git/GitHub, 
  and deployment strategies.  

  In addition to coding, I am researching generative AI models and experimenting with integrating AI-based features into 
  web applications, gaining practical experience in this emerging domain. This period is strengthening my technical 
  foundation and preparing me to contribute effectively to client-facing projects in the near future.`,
      skills: [
        "Spring Boot",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "RESTful APIs",
        "Hibernate",
        "SQL",
        "NoSQL",
        "JUnit",
        "Mockito",
        "Git",
        "GitHub",
        "GEN AI",
        "Agile",
      ],
    },
    {
      timeline: "March 2025 - June 2025",
      organization: "Edsom Fintech Pvt Ltd",
      location: "Pune City, India",
      workMode: "OnSite",
      role: "Software Engineer Intern",
      description: `Worked on the internal eCommerce platform, independently developing key modules including product 
  management, order processing, and payment workflows. Implemented backend services with Spring Boot, designing RESTful APIs 
  for seamless integration with the frontend.  

  Contributed to the iPaisa digital payments product by enhancing features, fixing bugs, and ensuring secure transaction 
  flows. Collaborated with cross-functional teams including UI/UX designers, QA engineers, and product managers to deliver 
  features aligned with business goals.  

  Prepared comprehensive technical documentation, system workflows, and module specifications to support future 
  maintenance and scalability. Optimized database interactions using Hibernate with SQL and NoSQL databases, ensuring 
  efficient performance. Learned best practices in agile software development, version control, and collaborative coding, 
  enhancing both technical and soft skills.`,
      skills: [
        "Spring Boot",
        "RESTful APIs",
        "Hibernate",
        "SQL",
        "NoSQL",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "GitHub",
        "Agile",
        "Scrum",
      ],
    },
    {
      timeline: "Jan 2025 - March 2025",
      organization: "MyndNova Solutions",
      location: "Pune City, India",
      workMode: "OnSite",
      role: "Software Engineer Intern",
      description: `Contributed to the development of a scalable Learning Management System (LMS) designed for efficient 
  educational content delivery. Implemented core features including course management, user enrollment, and content 
  tracking using Spring Boot on the backend and React with Tailwind CSS for the frontend.  

  Collaborated closely with cross-functional teams to understand functional requirements and translate them into 
  technical solutions. Designed RESTful APIs and integrated database models with Hibernate, ensuring data consistency 
  and optimized queries. Participated in code reviews, unit testing with JUnit, and Agile sprint planning sessions, 
  gaining hands-on experience in team-based software development.  

  Assisted in documenting system architecture, workflows, and module-level specifications to improve knowledge sharing 
  and maintainability. This internship strengthened both my full-stack development skills and my understanding of 
  building scalable, user-friendly applications in a professional environment.`,
      skills: [
        "Spring Boot",
        "RESTful APIs",
        "Hibernate",
        "SQL",
        "NoSQL",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "GitHub",
        "JUnit",
        "Agile",
        "Scrum",
      ],
    },
    {
      timeline: "Aug 2023 - June 2025",
      organization: "JSPM Jayawant Institute of Management Studies",
      location: "Pune City, India",
      role: "Master in Computer Applications",
      description: `Pursued advanced studies in computer applications with a focus on full-stack development, software 
  architecture, and enterprise-level application design. Gained hands-on experience in cloud computing, distributed 
  systems, web technologies, and project management, laying a strong foundation for software development roles.`,
      skills: [
        "Advanced Java Programming",
        "Enterprise Application Development",
        "Software Architecture & Design Patterns",
        "Cloud Computing Fundamentals",
        "Distributed Systems",
        "Web Technologies",
        "Machine Learning Basics",
        "Project & Team Management",
      ],
    },
    {
      timeline: "Sep 2020 - June 2023",
      organization: "Pratibha College of Commerce and Computer Studies",
      location: "Pune City, India",
      role: "Bachelors in Computer Science",
      description: `Completed undergraduate studies in computer science, developing a strong foundation in programming 
  fundamentals, object-oriented design, data structures and algorithms, database management, operating systems, 
  and computer networks. Gained exposure to software engineering principles and project-based learning.`,
      skills: [
        "Programming Fundamentals",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering Principles",
      ],
    },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative px-4">
      <GalaxyBackground />

      <div className="mx-auto relative z-20 flex flex-col items-center text-center justify-center py-5">
        <div className="pb-12">
          <h2 className="text-gray-500 text-xl font-semibold py-6 tracking-widest">
            THE EXPERIENCE
          </h2>
          <div className="">
            <h1 className="text-6xl font-bold bg-gradient-to-b from-[#FFFFFF] via-[#FFC300] to-[#FFD60A] bg-clip-text text-transparent">
              The Road I Have <br /> Walked Till Now:
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
                {" "}
                from
              </span>
              <span className="text-6xl font-serif font-extrabold italic bg-clip-text text-transparent">
                {" "}
                Dreams
              </span>
              <span className="text-6xl font-serif font-extrabold italic bg-clip-text text-transparent">
                {" "}
                to
              </span>
              <span className="text-6xl font-serif font-extrabold italic bg-clip-text text-transparent">
                {" "}
                Deployments.
              </span>
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
        </div>

        <div className="max-w-[1200px] w-full flex flex-col gap-20 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full hidden md:flex items-start pt-8 z-10">
            <div className="relative h-5/6 w-2">
              {/* Background Track */}
              <div className="absolute inset-0 bg-gray-600 rounded-full opacity-30"></div>

              {/* Progress Fill */}
              <div
                className="absolute top-0 w-full rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
                style={{ height: `${scrollProgress}%` }}
              ></div>

              {/* Progress Indicator Circle */}
              <div
                className="absolute w-4 h-4 bg-white rounded-full shadow-lg border-2 border-blue-400 -left-1 transition-all duration-150 ease-out"
                style={{
                  top: `${scrollProgress}%`,
                  transform: "translateY(-50%)",
                }}
              ></div>
            </div>
          </div>

          {experience.map((exp, index) => {
            return (
              <div
                key={exp.timeline}
                className="flex flex-col md:flex-row justify-between items-start gap-12 relative"
              >
                {/* Left content */}
                <div className="flex flex-col text-left gap-2 flex-1 md:pr-8">
                  <h2 className="uppercase text-sm text-gray-400">
                    {exp.timeline}
                  </h2>
                  <h1 className="text-2xl font-bold text-[#FFFFFF]">
                    {exp.organization}
                  </h1>
                  <h3 className="text-[16px] flex items-center gap-2 text-gray-400">
                    <MapPin className="w-5 h-5 text-gray-400" /> {exp.location}
                  </h3>
                  <h3 className="text-[16px] flex items-center text-gray-400 gap-2">
                    {exp.workMode != null && (
                      <>
                        <Briefcase className="w-5 h-5 text-gray-400" />
                        {exp.workMode}
                      </>
                    )}
                  </h3>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col text-left md:pl-8">
                  <h1 className="text-2xl font-bold pb-6 text-[#FFFFFF]">
                    {exp.role}
                  </h1>
                  <div className="text-[#FFFFFF]">
                    {exp.description
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((line, index) => (
                        <p key={index} className="mb-2">
                          {line}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
