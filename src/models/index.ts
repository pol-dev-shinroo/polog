/*******************  Types for Flex **************************/

export type Align = "start" | "end" | "center" | undefined;

export type Justify = "start" | "end" | "center" | "between" | undefined;

export type Direction = "row" | "col" | undefined;

/*******************  Types for Flex Switch *******************/

export type AlignSwitch =
  | "items-start"
  | "items-end"
  | "items-center"
  | undefined;

export type JustifySwitch =
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | undefined;

export type DirectionSwitch = "flex-row" | "flex-col" | "flex-row" | undefined;

/*******************  Types for ClassName ********************/

export type TClassName = string;

/*******************  Types for darkClasses ******************/

export type TDarkClasses = string[];

/*******************  Types for darkClasses ******************/

export type TDarkProp = boolean | undefined;

/*******************  Types for transitionClass **************/

export type TTransitionClass = string[] | undefined;

/*******************  Types for zIndex ***********************/

export type TZindex = "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50";

/*******************  Types for tagNames *********************/

export type TBoxTag = "div" | "header";

export type TTextTag = "h1" | "h2" | "h3" | "p" | "span";

/*******************  Types for onClick **********************/

export type TOnClick = () => void;

/*******************  Types for children *********************/

export type TChildren = React.ReactNode;

/*******************  Types for position *********************/

export type TPosition = "relative" | "absolute" | "fixed" | "sticky" | string;

/*******************  Types for framer-motion *****************/

export type TLayout = boolean;

export type TTransition = object;

export type TAnimate = object;

export type TInitial = object;

export type TWhileHover = object;

export type TWhileTap = object;

/*******************  Types for svg *****************/

export type TFill = string;

/*******************  Types for index *****************/

export type TIndex = number;
