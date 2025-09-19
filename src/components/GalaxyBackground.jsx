const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background: #000814 -> black -> #000814 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0000000] via-[000814] to-[#000000]"></div>

      {/* Secondary radial gradients for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#000814]/40 to-[#000814]/80"></div>

      {/* Large nebula-like formations */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-500/20 via-blue-600/15 to-transparent rounded-full blur-3xl animate-float opacity-60"></div>
      <div className="absolute top-2/3 right-1/5 w-[28rem] h-[28rem] bg-gradient-to-tl from-cyan-400/25 via-teal-500/20 to-transparent rounded-full blur-3xl animate-float-delayed opacity-70"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[24rem] h-[24rem] bg-gradient-to-tr from-indigo-500/18 via-purple-400/22 to-transparent rounded-full blur-3xl animate-float-slow opacity-50"></div>

      {/* Medium glowing orbs */}
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-400/30 to-purple-500/25 rounded-full blur-2xl animate-pulse-glow"></div>
      <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-gradient-to-r from-teal-300/35 to-cyan-400/30 rounded-full blur-2xl animate-pulse-glow-delayed"></div>
      <div className="absolute bottom-1/6 right-2/3 w-40 h-40 bg-gradient-to-r from-indigo-400/28 to-blue-500/33 rounded-full blur-2xl animate-pulse-glow-slow"></div>

      {/* Distant star clusters */}
      {/* <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-white/80 rounded-full animate-twinkle shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
      <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-cyan-200/90 rounded-full animate-twinkle-delayed shadow-[0_0_8px_rgba(34,211,238,0.7)]"></div>
      <div className="absolute bottom-1/3 right-1/5 w-2.5 h-2.5 bg-purple-200/85 rounded-full animate-twinkle-slow shadow-[0_0_12px_rgba(196,181,253,0.6)]"></div>
      <div className="absolute top-3/5 right-3/4 w-1.5 h-1.5 bg-blue-100/95 rounded-full animate-twinkle-fast shadow-[0_0_6px_rgba(219,234,254,0.8)]"></div>
      <div className="absolute top-1/8 left-3/4 w-2 h-2 bg-teal-200/80 rounded-full animate-twinkle shadow-[0_0_9px_rgba(153,246,228,0.7)]"></div>
      <div className="absolute bottom-1/8 left-1/8 w-3 h-3 bg-indigo-100/75 rounded-full animate-twinkle-delayed shadow-[0_0_11px_rgba(224,231,255,0.6)]"></div> */}

      {/* Floating cosmic particles */}
      <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-gradient-to-br from-violet-500/12 to-fuchsia-500/8 rounded-full blur-3xl animate-drift opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-gradient-to-tl from-emerald-400/15 to-cyan-300/10 rounded-full blur-3xl animate-drift-reverse opacity-35"></div>
      <div className="absolute top-1/6 left-4/5 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-purple-600/15 rounded-full blur-2xl animate-drift-slow opacity-45"></div>

      {/* Small atmospheric particles */}
      {/* <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-float-tiny"></div>
      <div className="absolute top-3/4 left-1/4 w-0.5 h-0.5 bg-cyan-300/70 rounded-full animate-float-tiny-delayed"></div>
      <div className="absolute bottom-1/5 right-1/2 w-1.5 h-1.5 bg-purple-300/50 rounded-full animate-float-tiny-slow"></div> */}

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#000814]/60 pointer-events-none"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(1deg);
          }
          66% {
            transform: translateY(15px) translateX(-8px) rotate(-1deg);
          }
        }

        @keyframes drift {
          0%,
          100% {
            transform: translateX(0px) translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateX(20px) translateY(-15px) rotate(90deg);
          }
          50% {
            transform: translateX(0px) translateY(-30px) rotate(180deg);
          }
          75% {
            transform: translateX(-20px) translateY(-15px) rotate(270deg);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes floatTiny {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 15s ease-in-out infinite;
          animation-delay: -5s;
        }
        .animate-float-slow {
          animation: float 18s ease-in-out infinite;
          animation-delay: -9s;
        }

        .animate-drift {
          animation: drift 25s linear infinite;
        }
        .animate-drift-reverse {
          animation: drift 30s linear infinite reverse;
          animation-delay: -10s;
        }
        .animate-drift-slow {
          animation: drift 35s linear infinite;
          animation-delay: -15s;
        }

        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
        .animate-pulse-glow-delayed {
          animation: pulseGlow 5s ease-in-out infinite;
          animation-delay: -2s;
        }
        .animate-pulse-glow-slow {
          animation: pulseGlow 6s ease-in-out infinite;
          animation-delay: -3s;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-twinkle-delayed {
          animation: twinkle 4s ease-in-out infinite;
          animation-delay: -1s;
        }
        .animate-twinkle-slow {
          animation: twinkle 5s ease-in-out infinite;
          animation-delay: -2.5s;
        }
        .animate-twinkle-fast {
          animation: twinkle 2s ease-in-out infinite;
          animation-delay: -0.5s;
        }

        .animate-float-tiny {
          animation: floatTiny 8s ease-in-out infinite;
        }
        .animate-float-tiny-delayed {
          animation: floatTiny 10s ease-in-out infinite;
          animation-delay: -3s;
        }
        .animate-float-tiny-slow {
          animation: floatTiny 12s ease-in-out infinite;
          animation-delay: -6s;
        }

        .bg-gradient-radial {
          background: radial-gradient(
            ellipse at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </div>
  );
};

export default GalaxyBackground;
