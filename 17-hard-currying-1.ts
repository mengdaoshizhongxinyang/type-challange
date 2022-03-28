/*
Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

For example:

const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
The function passed to Currying may have multiple arguments, you need to correctly type it.

In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
 */
type Cur<T extends any[],Res>=T extends [infer L,...infer R]
  ?(arg:L)=>Cur<R,Res>
  :Res
declare function Currying<T>(fn: T): T extends (...args:infer Arg)=>infer R
  ?Cur<Arg,R>
  :never

import { Equal, Expect } from '@type-challenges/utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]