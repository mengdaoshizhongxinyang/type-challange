/*
  741 - Sort
  -------
  by Sg (@suica) #extreme #infer #array
  
  ### Question
  
  In this challenge, you are required to sort natural number arrays in either ascend order or descent order.
  
  Ascend order examples:
  ```ts
  Sort<[]> // []
  Sort<[1]> // [1]
  Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]> //  [2, 4, 5, 6, 6, 6, 7, 8, 9]
  ```
  
  The `Sort` type should also accept a boolean type. When it is `true`, the sorted result should be in descent order. Some examples:
  
  ```ts
  Sort<[3, 2, 1], true> // [3, 2, 1]
  Sort<[3, 2, 0, 1, 0, 0, 0], true> // [3, 2, 1, 0, 0, 0, 0]
  ```
  
  Extra challenges:
  1. Support natural numbers with 15+ digits.
  2. Support float numbers.
  
  > View on GitHub: https://tsch.js.org/741
*/


/* _____________ Your Code Here _____________ */
type GetTuple<Length extends number = 0> = GetTupleHelper<Length>

type GetTupleHelper<
  Length extends number = 0,
  R extends unknown[] = []
> = R["length"] extends Length ? R : GetTupleHelper<Length, [...R, unknown]>
type Or<C1 extends boolean, C2 extends boolean> = C1 extends true
  ? true
  : C2 extends true
  ? true
  : false

type NumberLike = number | `${number}`

type Not<C extends boolean> = C extends true ? false : true

type IsNotEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = false
> = Not<IsEqual<L, R, Strict>>

type CheckLeftIsExtendsRight<T extends any, R extends any> = T extends R
  ? true
  : false

  type CanStringified = string | number | bigint | boolean | null | undefined

  type Stringify<T extends CanStringified> = `${T}`


type IsEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = false
> = Strict extends true
  ? CheckLeftIsExtendsRight<L, R>
  : CheckLeftIsExtendsRight<Stringify<L>, Stringify<R>>


type IsZero<N extends NumberLike> = CheckLeftIsExtendsRight<N, 0 | "0">
type Pop<T extends unknown[]> = T extends [...infer LeftRest, infer Last]
  ? LeftRest
  : never
type CompareHelper<
  N1 extends number,
  N2 extends number,
  A1 extends unknown[] = GetTuple<N1>,
  A2 extends unknown[] = GetTuple<N2>
> = IsNotEqual<N1, N2, false> extends true
  ? Or<IsZero<A1["length"]>, IsZero<A2["length"]>> extends true
    ? IsZero<A1["length"]> extends true
      ? false
      : true
    : CompareHelper<Pop<A1>["length"], Pop<A2>["length"]>
  : false

type Compare<N1 extends number, N2 extends number> = CompareHelper<N1, N2>
type MP<T extends unknown[],C extends boolean=false>=
  T extends [infer X,infer Y,...infer A]
    ? X extends number 
      ? Y extends number
        ?Compare<X,Y> extends C
          ?[X,...MP<[Y,...A],C>]
          :[Y,...MP<[X,...A],C>]
        :T
      :T
    :T
type Sort<T extends unknown[],C extends boolean=false> = 
  T extends [infer X,...infer A]
    ? X extends number 
        ?MP<[X,...Sort<[...A],C>],C>
        :MP<[X,...Sort<[...A],C>],C>
    :T
type A=Sort<[12,2,3,1,32,56,2,5,6,11,4],true>
/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Sort<[]>, []>>,
    Expect<Equal<Sort<[1]>, [1]>>,
    Expect<Equal<Sort<[2, 1]>, [1, 2]>>,
    Expect<Equal<Sort<[0, 0, 0]>, [0, 0, 0]>>,
    Expect<Equal<Sort<[1, 2, 3]>, [1, 2, 3]>>,
    Expect<Equal<Sort<[3, 2, 1]>, [1, 2, 3]>>,
    Expect<Equal<Sort<[3, 2, 1, 2]>, [1, 2, 2, 3]>>,
    Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0]>, [0, 0, 0, 0, 1, 2, 3]>>,
    Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]>, [2, 4, 5, 6, 6, 6, 7, 8, 9]>>,
    Expect<Equal<Sort<[1, 1, 2, 1, 1, 1, 1, 1, 1]>, [1, 1, 1, 1, 1, 1, 1, 1, 2]>>,
    Expect<Equal<Sort<[], true>, []>>,
    Expect<Equal<Sort<[1], true>, [1]>>,
    Expect<Equal<Sort<[2, 1], true>, [2, 1]>>,
    Expect<Equal<Sort<[0, 0, 0], true>, [0, 0, 0]>>,
    Expect<Equal<Sort<[1, 2, 3], true>, [3, 2, 1]>>,
    Expect<Equal<Sort<[3, 2, 1], true>, [3, 2, 1]>>,
    Expect<Equal<Sort<[3, 2, 1, 2], true>, [3, 2, 2, 1]>>,
    Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0], true>, [3, 2, 1, 0, 0, 0, 0]>>,
    Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9], true>, [9, 8, 7, 6, 6, 6, 5, 4, 2]>>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/741/answer
  > View solutions: https://tsch.js.org/741/solutions
  > More Challenges: https://tsch.js.org
*/

