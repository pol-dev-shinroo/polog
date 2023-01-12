import { styled } from "twin.macro";
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
} from "src/models";

type TFramerText = {
  onClick?: TOnClick;
  tagName?: TBoxTag | TTextTag;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  positionClasses?: TPosition;
  children?: TChildren;
  /** framer props */
  layout?: TLayout;
  Framertransition?: TTransition;
};

const FramerText = ({
  onClick,
  tagName,
  className,
  lightClasses,
  darkClasses,
  transitionClasses,
  positionClasses,
  children,
  /** framer props */
  layout,
  Framertransition,
}: TFramerText) => {
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
        layout={layout}
        transition={Framertransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const StFramer = styled(motion.div)``;

export default FramerText;
