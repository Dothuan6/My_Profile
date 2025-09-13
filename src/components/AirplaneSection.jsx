import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlane } from "react-icons/fa";

function AirplaneSection() {
  const [visible, setVisible] = useState(true);

  return (
    <motion.section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Glow nền */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-cyan-500/30 via-transparent to-transparent blur-3xl"></div>

      <AnimatePresence
        onExitComplete={() => {
          setTimeout(() => setVisible(true), 300);
        }}
      >
        {visible && (
          <motion.div
            key="plane"
            className="z-10 cursor-pointer relative"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1000, opacity: 0, scale: 1.2 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setVisible(false)}
          >
            <motion.div
              animate={{
                y: [0, -10, 0, 8, 0],
                rotate: [0, 2, -2, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative flex items-center"
            >
              {/* Máy bay */}
              <FaPlane
                className="w-32 h-32 text-cyan-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.9)]"
                style={{ transform: "rotate(0deg)" }}
              />

              {/* Tia sét xung quanh đuôi */}
              {[...Array(12)].map((_, i) => {
                const angle = Math.random() * 360; // góc ngẫu nhiên
                const length = 80 + Math.random() * 60; // độ dài ngẫu nhiên
                return (
                  <motion.div
                    key={i}
                    className="absolute left-[-10px] top-1/2 -translate-y-1/2
                               w-[2px] h-20 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent
                               shadow-[0_0_15px_rgba(0,255,255,0.9)] origin-bottom"
                    style={{ rotate: `${angle}deg`, height: `${length}px` }}
                    animate={{
                      scaleY: [0.5, 1.2, 0.5],
                      opacity: [0, 1, 0],
                      skewX: [-20, 15, -10],
                      skewY: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 0.5 + Math.random() * 0.3,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default AirplaneSection;