import { styled } from "twin.macro";
import { dark, transition, classCombine } from "src/lib";
import {
  TClassName,
  TOnChangeInput,
  TDarkClasses,
  TTransitionClass,
  TOnKeyPress,
} from "src/models";

interface IInput {
  onChange: TOnChangeInput;
  onKeyPress?: TOnKeyPress;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  value?: string;
  placeholder?: string;
}

const Input = ({
  onChange,
  className,
  lightClasses,
  darkClasses,
  transitionClasses,
  onKeyPress,
  value,
  placeholder,
}: IInput) => {
  return (
    <StInput
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
      placeholder={placeholder}
      className={classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
      })}
    />
  );
};

const StInput = styled.input`
  outline: none;
`;

export default Input;
