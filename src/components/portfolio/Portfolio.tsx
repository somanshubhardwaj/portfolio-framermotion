import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Portfolio = () => {
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
    },{
      id: 9,
      githubname: "weatherapp-reactnative",
    }
  ];


  return (
    <div className="portfolio">
  
      <section className="portfoliosection">
        <div >
        {items.map((item) => {
          return (
            <a href={`https://github.com/somanshubhardwaj/${item.githubname}`} key={item.id}>
            <img
              src={`https://github-readme-stats.vercel.app/api/pin/?username=somanshubhardwaj&repo=${item.githubname}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt=""
            /></a>
          );
        })}</div>
      </section>
    </div>
  );
};

export default Portfolio;
