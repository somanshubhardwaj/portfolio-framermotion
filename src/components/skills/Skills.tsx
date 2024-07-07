import "./skill.scss";
import { motion, Variants, useInView } from "framer-motion";
import { createRef, useRef } from "react";

const variant: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>();
  const isInvView = useInView(ref, {  });

  return (
    <motion.div className="skills">
      <div className="skillscontainer">
        <motion.div
          className="aboutme"
          style={{
            opacity: 0,
            y: 100,
          }}
          variants={variant}
          animate={isInvView ? "visible" : "hidden"}
          ref={ref}
        >
          <h1>About Me</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            earum necessitatibus et eum animi praesentium ea. Voluptas minima
            quas quam sit beatae eveniet aliquam? Accusantium quo ratione
            tempora perferendis saepe.
          </span>
        </motion.div>
        <motion.div className="skillsimage">
          <img src="https://skillicons.dev/icons?i=git,docker,css,express,firebase,github,html,js,md,mongodb,nextjs,nodejs,npm,py,react,sass,tailwind,ts,vercel,vite&perline=6" />
        </motion.div>
      </div>
      <div className="git">
        <h1>Github Stats</h1>
        <div className="stats">
          <motion.img
            src="https://github-readme-stats.vercel.app//api/top-langs?username=somanshubhardwaj&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt=""
          />
          <motion.img
            src="https://github-readme-stats.vercel.app/api?username=somanshubhardwaj&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
