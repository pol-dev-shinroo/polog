import { motion, AnimatePresence } from "framer-motion";
import { styled } from "twin.macro";
import {
  TChildren,
  TOnClick,
  TClassName,
  TDarkClasses,
  TWhileHover,
  TWhileTap,
} from "src/models";
import { dark, classCombine } from "src/lib";

interface IFramerBtn {
  onClick: TOnClick;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  children?: TChildren;
  /** framer props */
  whileHover?: TWhileHover;
  whileTap?: TWhileTap;
}

const FramerBtn = ({
  children,
  onClick,
  className,
  lightClasses,
  darkClasses,
  whileHover,
  whileTap,
}: IFramerBtn) => {
  return (
    <AnimatePresence>
      <TFramerBtn
        onClick={onClick}
        whileHover={whileHover}
        whileTap={whileTap}
        className={classCombine({
          dark: dark(lightClasses, darkClasses),
          className,
        })}
      >
        {children}
      </TFramerBtn>
    </AnimatePresence>
  );
};

const TFramerBtn = styled(motion.button)``;

export default FramerBtn;
