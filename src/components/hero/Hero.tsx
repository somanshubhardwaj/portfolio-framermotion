import "./hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  const textVariants={
     initial:{
      x:-500,
      opacity:0

     },
     animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1
      }
     },
     scrollbtn:{
      opacity:0,
      y:10,
      transition:{
        repeat:Infinity,
        duration:2
      }
     }
  }
  const sliderVariants={
    initial:{
      x:0
    },
    animate:{
      x:"-220%",
      transition:{
        repeat:Infinity,
        duration:20,
        repeatType: "mirror" as const
      }
    }
  }
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>SOMANSHU BHARDWAJ</motion.h2>
          <motion.h1 className="" variants={textVariants}>Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="button" variants={textVariants}>Contact Me</motion.button>
            <motion.button className="button" variants={textVariants}>Download CV</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt=""variants={textVariants} animate="scrollbtn" />
        </motion.div>
      </div>
      <motion.div className="slidingtext" variants={sliderVariants} initial="initial" animate="animate">
        Web React Next.js Node.js Express.js MongoDB Mongoose Firebase
      </motion.div>
      
    </div>
  );
};

export default Hero;
