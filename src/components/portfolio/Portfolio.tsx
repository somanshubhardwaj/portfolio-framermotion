import "./portfolio.scss";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
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
const Portfolio = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInvView = useInView(ref, {});
  const items = [
    {
      id: 1,
      githubname: "finacialtracker",
    },
    {
      id: 2,
      githubname: "discord-bot",
    },
    {
      id: 3,
      githubname: "weatherapp",
    },
    {
      id: 4,
      githubname: "my-gemini-app",
    },
    {
      id: 5,
      githubname: "thesocial-nextjs",
    },
    {
      id: 6,
      githubname: "mydictionary",
    },
    {
      id: 7,
      githubname: "myportfolio",
    },
    {
      id: 8,
      githubname: "ChatRoom",
    },
    {
      id: 9,
      githubname: "weatherapp-reactnative",
    },
  ];

  return (
    <motion.div
      className="portfolio"
      variants={variant}
      animate={isInvView ? "visible" : "hidden"}
      ref={ref}
    >
      <section className="portfoliosection">
        <div>
          {items.map((item) => {
            return (
              <motion.a
              variants={variant}
                href={`https://github.com/somanshubhardwaj/${item.githubname}`}
                key={item.id}
              >
                <img
                  src={`https://github-readme-stats.vercel.app/api/pin/?username=somanshubhardwaj&repo=${item.githubname}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                  alt=""
                />
              </motion.a>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
