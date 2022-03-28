/*
Implement the advanced util type UnionToIntersection<U>

For example

type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
 */
import { Equal, Expect } from '@type-challenges/utils'
type UnionToIntersection<U extends any> = (U extends any?(u:U)=>any:never) extends (a:infer K)=>any
  ? K
  : never


type cases = [
    Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
    Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]