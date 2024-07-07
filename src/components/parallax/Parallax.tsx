import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const parallax = ({ type }: { type: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #111132 , #0c0c1d )"
            : "linear-gradient(180deg, #111132 , #505064 )",
      }}
      ref={ref}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "What I can ?" : "What I did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "skills" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default parallax;
