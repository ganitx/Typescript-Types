/*
  Implement the JavaScript `Array.includes` function in the type system. 
  A type takes the two arguments. The output should be a boolean `true` or `false`.

  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
*/

type Includes<T extends readonly any[], U> = {
    [P in T[number]]: true
}[U] extends true ? true : false;


// RECURSIVE
type IsEqual<T, U> = 
        (<X>() => X extends T ? 1 : 2) extends
        (<X>() => X extends U ? 1 : 2)
            ? true
            : false;

type includesX<T extends readonly any[], U> = 
        IsEqual<T[0], U> extends true
            ? true
            : T extends [T[0], ...infer rest]
                ? includesX<rest, U>
                : false;