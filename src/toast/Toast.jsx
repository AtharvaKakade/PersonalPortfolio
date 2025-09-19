// Toast.js
import { motion, AnimatePresence } from "framer-motion";
import { CheckCheck } from "lucide-react";

export default function Toast({ message, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 
                     px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
        >
          <div className="flex items-start gap-3 rounded-2xl bg-[#0000814] px-4 py-3 shadow-md border border-[#003566]">
            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCheck className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-green-800">
                Copied to clipboard!
              </h3>
              <p className="text-xs text-green-600">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
