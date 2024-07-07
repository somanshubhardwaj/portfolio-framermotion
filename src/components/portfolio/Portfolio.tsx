import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Social Media App",
    img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A social media app that connects people together.",
  },
  {
    id: 2,
    title: "Rampa UI Design",
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A UI design for a mobile app that helps people to find the best places.",
  },
  {
    id: 3,
    title: "E-commerce Web Design",
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "An e-commerce website that helps people to find the best products.",
  },
  {
    id: 4,
    title: "Relax Mobile App",
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A mobile app that helps people to relax their minds.",
  },
  {
    id: 5,
    title: "Hero Web Design",
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A web design for a hero section of a website.",
  },
  {
    id: 6,
    title: "Banking App",
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A banking app that helps people to manage their money.",
  },
];
type SingleItemProps = {
  title: string;
  img: string;
  desc: string;
};

const SingleItem = ({ title, img, desc }: SingleItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
   // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100,100]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref} >
            <img src={img} alt="" />
          </div>
          <motion.div className="textcontainer" style={{y:y}}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured work</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>

      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Portfolio;
