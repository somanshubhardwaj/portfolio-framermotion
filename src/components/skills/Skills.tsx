import "./skill.scss";
const Skills = () => {
  return (
    <div className="skills">
      <div className="skillscontainer">
        <div className="aboutme">
          <h1>About Me</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            earum necessitatibus et eum animi praesentium ea. Voluptas minima
            quas quam sit beatae eveniet aliquam? Accusantium quo ratione
            tempora perferendis saepe.
          </span>
        </div>
        <div className="skillsimage">
          <img src="https://skillicons.dev/icons?i=git,docker,css,express,firebase,github,html,js,md,mongodb,nextjs,nodejs,npm,py,react,sass,tailwind,ts,vercel,vite&perline=6" />
        </div>
      </div>
      <div className="git">
        <h1>Github Stats</h1>
        <div className="stats">
          <img
            src="https://github-readme-stats.vercel.app//api/top-langs?username=somanshubhardwaj&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt=""
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=somanshubhardwaj&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
