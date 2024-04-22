/*
  Implement the built-in Parameters<T> generic without using it.

  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
*/

type MyParameters<T> = T extends (...args: infer S) => any ? S : any;