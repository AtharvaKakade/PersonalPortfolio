import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Background overlay with blur effect */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal positioned relative to navbar */}
      <div className="flex justify-center pt-20">
        <div
          ref={modalRef}
          className="bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl relative z-10 w-[320px] border border-gray-700/50 animate-in fade-in-0 zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-700/50">
            <h2 className="text-white text-lg font-medium">Quick Access</h2>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Blog Card */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30 hover:bg-gray-800/70 transition-all duration-200 hover:scale-[1.02] group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div onClick={() => navigate("/blogs")} className="flex-1">
                  <h3 className="text-white font-medium text-sm">Blogs</h3>
                  <p className="text-gray-400 text-xs">
                    Latest thoughts and insights
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
