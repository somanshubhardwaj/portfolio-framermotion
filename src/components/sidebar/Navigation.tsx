
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
      <MenuItem i={item.title} key={item.id} />
    ))}
  </motion.ul>
);


const navigationItems=[
  {id:0, title:"Home", icon:"home"},
  {id:1, title:"About", icon:"user"},
  {id:2, title:"Portfolio", icon:"briefcase"},
  {id:3, title:"Contact", icon:"mail"},
  {id:4, title:"Blog", icon:"book"}
]
