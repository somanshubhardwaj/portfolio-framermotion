
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className="navigationList">
    {navigationItems.map(item => (
      <MenuItem i={item.title} id={item.id} key={item.id} />
    ))}
  </motion.ul>
);


const navigationItems=[
  { title:"Home",id:"home"},
  { title:"Skills",id:"skills"},
  { title:"Portfolio",id:"portfolio"},
]
