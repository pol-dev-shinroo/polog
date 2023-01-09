1. type paramter

In the TypeScript code useState<string | null>(null);, the angle brackets (<>) and the type inside of them (string | null) are called a type parameter.

```js
const identity = <T>(arg: T): T => {
  return arg;
};
```

```js
let output = identity < string > "hello"; // output is of type string
let output = identity < number > 42; // output is of type number
```

You can also use type inference to specify the type argument automatically based on the type of the value passed as an argument. For example:

```js
let output = identity("hello"); // output is of type string
let output = identity(42); // output is of type number
```

Type parameters are a powerful tool in TypeScript that allow you to write generic, flexible code that can work with a variety of types.

2. rest paramter

The ...strings syntax is called the rest parameter syntax, and it allows you to capture a variable number of arguments in an array. When you call the myFunction function with multiple string arguments separated by commas, like this:

```js
let output = myFunction("1", "2", "3");
```

```js
function myFunction(...strings: string[]): string {
  return strings.map((s) => `dark:${s}`).join(" ");
}
```

You can also pass an array of strings to the function using the spread operator (...):

```js
let strings = ["1", "2", "3"];
let output = myFunction(...strings);
console.log(output); // "dark:1 dark:2 dark:3"
```

3. && operator

```js
const Container =
  tw.div <
  ContainerProps >
  `
  ${({ $align, $justify, $direction }) =>
    flex({ $justify, $align, $direction })}
    bg-stone-200 "bg-slate-800"
    ${({ $dark }) => $dark && dark($dark)}
    h-screen
    transition
`;
```

You can fix this error by ensuring that $dark is not undefined before passing it to the dark function. You can do this by using the && operator to short-circuit the call to dark if $dark is undefined.

=> This will only call the dark function if $dark is not undefined, which will satisfy the type checker.
