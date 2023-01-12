import { motion, AnimatePresence } from "framer-motion";
import { dark, transition, classCombine } from "src/lib";
import {
  TClassName,
  TDarkClasses,
  TBoxTag,
  TChildren,
  TTransitionClass,
  TPosition,
  TOnClick,
  TTextTag,
} from "src/models";

type TFramer = {
  onClick?: TOnClick;
  tagName?: TBoxTag | TTextTag;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  positionClasses?: TPosition;
  children?: TChildren;
};

const Framer = ({
  onClick,
  tagName,
  className,
  lightClasses,
  darkClasses,
  transitionClasses,
  positionClasses,
  children,
}: TFramer) => {
  return (
    <AnimatePresence>
      <motion.div
        /** Framer accepts all tagnames within as attribute */
        as={tagName}
        className={classCombine({
          transition: transition(transitionClasses),
          dark: dark(lightClasses, darkClasses),
          className,
          position: positionClasses,
        })}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Framer;
