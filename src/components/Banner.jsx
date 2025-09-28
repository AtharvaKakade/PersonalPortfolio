import { Download } from "lucide-react";
import SplitText from "./SplitText";


const Banner = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <section className="bg-[#000000] py-32 relative overflow-hidden h-screen">
        {/* Galaxy Background Animation - Dark Theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large blurry circles - Dark colors only */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-700/15 to-slate-700/15 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-600/12 to-gray-600/12 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-neutral-700/10 to-zinc-700/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Medium floating circles - Subtle dark tones */}
          <div
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-gray-800/20 to-slate-800/20 rounded-full filter blur-2xl animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/6 right-1/6 w-32 h-32 bg-gradient-to-r from-zinc-700/15 to-neutral-700/15 rounded-full filter blur-2xl animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/6 right-2/3 w-40 h-40 bg-gradient-to-r from-slate-700/12 to-gray-700/12 rounded-full filter blur-2xl animate-bounce"
            style={{ animationDelay: "2.5s", animationDuration: "5s" }}
          ></div>

          {/* Small twinkling stars - Muted whites and grays */}
          <div className="absolute top-1/5 left-1/5 w-8 h-8 bg-gray-300/25 rounded-full filter blur-sm animate-ping"></div>
          <div
            className="absolute top-2/3 left-2/3 w-6 h-6 bg-slate-300/20 rounded-full filter blur-sm animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-neutral-400/25 rounded-full filter blur-sm animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-3/5 right-3/4 w-5 h-5 bg-zinc-300/20 rounded-full filter blur-sm animate-ping"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/60 to-[#000000]"></div>
        </div>

        {/* Animated CSS for floating effect */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-10px) rotate(2deg);
            }
            66% {
              transform: translateY(10px) rotate(-2deg);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float 6s ease-in-out infinite;
            animation-delay: -2s;
          }

          .animate-float-slow {
            animation: float 8s ease-in-out infinite;
            animation-delay: -4s;
          }
        `}</style>

        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/15 to-purple-600/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 rounded-full filter blur-3xl animate-float-delayed"></div>
        <div
          className="absolute top-1/6 left-3/4 w-36 h-36 
    bg-gradient-to-r from-[#001D3D]/30 to-blue-500/25 
    rounded-full filter blur-2xl animate-float-slow"
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <SplitText
              text="Hello, I'm Atharva👋 a Full Stack Developer"
              className="text-xl mb-4 text-[#FFD60A] transform transition-all duration-500 hover:scale-90 hover:text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            <h1 className="text-6xl font-bold mb-6 transform transition-all duration-700 hover:scale-95">
              <span className="text-[#FFC300] transition-colors duration-300 hover:text-white ">
                Designing{" "}
              </span>
              <br />
              <span className="text-[#FFC300] transition-colors duration-300 hover:text-white ">
                Developing{" "}
              </span>
              <span className="text-white">and always</span>
              <span className="text-[#FFC300] transition-colors duration-300 hover:text-white">
                {" "}
                Discovering
              </span>{" "}
              <span className="text-white">!</span>
            </h1>


            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto transition-all duration-300 hover:text-white">
              With passion, love, and enthusiasm for technology, I embrace
              innovation and problem-solving every day.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#contact"
                className="bg-[#FFC300] text-[#000814] px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/176Zlu4Yg7MF630JCHs0BuCjl_-rOCaXu/view?usp=sharing"
                className="border border-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 hover:border-[#FFC300] transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Download
                  size={18}
                  className="text-[#FFD60A] mr-2 group-hover:animate-bounce"
                />{" "}
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
