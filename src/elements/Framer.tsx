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
  TLayout,
  TTransition,
  TZindex,
  TAnimate,
  TInitial,
  TWhileHover,
} from "src/models";

type TFramer = {
  onClick?: TOnClick;
  tagName?: TBoxTag | TTextTag;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  positionClasses?: TPosition;
  zIndex?: TZindex;
  children?: TChildren;
  /** framer props */
  layout?: TLayout;
  framertransition?: TTransition;
  framerAnimate?: TAnimate;
  framerInitial?: TInitial;
  whileHover?: TWhileHover;
};

const Framer = ({
  onClick,
  tagName,
  className,
  lightClasses,
  darkClasses,
  transitionClasses,
  positionClasses,
  zIndex,
  children,
  /** framer props */
  layout,
  framertransition,
  framerAnimate,
  framerInitial,
  whileHover,
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
          zIndex: zIndex,
        })}
        onClick={onClick}
        layout={layout}
        transition={framertransition}
        animate={framerAnimate}
        initial={framerInitial}
        whileHover={whileHover}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Framer;
