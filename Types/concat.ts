/*
  Implement the JavaScript `Array.concat` function in the type system. 
  A type takes the two arguments. The output should be a new array that 
  includes inputs in ltr order

  type Result = Concat<[1], [2]> // expected to be [1, 2]
*/

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U];