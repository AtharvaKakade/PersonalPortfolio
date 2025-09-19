import React from "react";

const SlidingElements = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        Continuous Sliding Examples
      </h2>

      {/* Method 1: Using CSS Animation with custom keyframes */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Method 1: CSS Keyframes
        </h3>
        <div className="overflow-hidden whitespace-nowrap bg-blue-50 py-4">
          <div className="inline-block animate-scroll">
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 1
            </span>
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 2
            </span>
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 3
            </span>
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 4
            </span>
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 5
            </span>
            {/* Duplicate for seamless loop */}
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 1
            </span>
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 2
            </span>
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 3
            </span>
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 4
            </span>
            <span className="inline-block mx-8 px-4 py-2 bg-blue-500 text-white rounded">
              Item 5
            </span>
          </div>
        </div>
      </div>

      {/* Method 2: Using transform with custom animation */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Method 2: Transform Animation
        </h3>
        <div className="overflow-hidden bg-green-50 py-4">
          <div className="flex animate-slide-left">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-4 w-32 h-20 bg-green-500 text-white flex items-center justify-center rounded"
              >
                Card {i + 1}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[...Array(10)].map((_, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 mx-4 w-32 h-20 bg-green-500 text-white flex items-center justify-center rounded"
              >
                Card {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Method 3: Reverse direction */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Method 3: Right to Left
        </h3>
        <div className="overflow-hidden bg-purple-50 py-4">
          <div className="flex animate-slide-right">
            {["🚀", "🌟", "⭐", "🔥", "💫", "✨", "🎯", "🎪"].map(
              (emoji, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-6 w-16 h-16 bg-purple-500 text-white text-2xl flex items-center justify-center rounded-full"
                >
                  {emoji}
                </div>
              )
            )}
            {/* Duplicate for seamless loop */}
            {["🚀", "🌟", "⭐", "🔥", "💫", "✨", "🎯", "🎪"].map(
              (emoji, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex-shrink-0 mx-6 w-16 h-16 bg-purple-500 text-white text-2xl flex items-center justify-center rounded-full"
                >
                  {emoji}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Method 4: Different speeds */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Method 4: Different Speeds
        </h3>

        <div className="overflow-hidden bg-red-50 py-2 mb-2">
          <div className="flex animate-slide-fast">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 px-6 py-2 bg-red-400 text-white rounded-full whitespace-nowrap"
              >
                Fast • Item {i + 1}
              </div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 mx-3 px-6 py-2 bg-red-400 text-white rounded-full whitespace-nowrap"
              >
                Fast • Item {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden bg-orange-50 py-2">
          <div className="flex animate-slide-slow">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 px-6 py-2 bg-orange-400 text-white rounded-full whitespace-nowrap"
              >
                Slow • Item {i + 1}
              </div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 mx-3 px-6 py-2 bg-orange-400 text-white rounded-full whitespace-nowrap"
              >
                Slow • Item {i + 1}
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
          animation: slide-left 20s linear infinite;
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
  );
};

export default SlidingElements;
