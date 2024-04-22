/*
  Implement the generic version of ```Array.push```

  type Result = Push<[1, 2], '3'> // [1, 2, '3']
*/

type Push<T extends unknown[], U> = [...T, U];