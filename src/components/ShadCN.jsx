import React from "react";
import { motion, scale } from "motion/react";

const ShadCN = () => {
  return (
    <motion.div
      animate={{ rotate: 360, transition: { duration: 1 } }}
      whileHover={{ scale: 2 }}
      whileTap={{ scale: 0.5 }}
      onHoverStart={() => console.log("hover started")}
      className="bg-violet-500 w-64 h-64 rounded flex justify-center items-center"
    >
      <motion.h1>h1</motion.h1>
    </motion.div>
  );
};

export default ShadCN;
