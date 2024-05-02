/*
    Implement `TrimLeft<T>` which takes an exact string type and 
    returns a new string with the whitespace beginning removed.

    type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
*/

type Space = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S;