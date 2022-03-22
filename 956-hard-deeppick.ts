import { Equal, Expect } from '@type-challenges/utils'

type Obj = {
  a: number,
  b: string,
  c:  boolean,
  obj: {
    d: number,
    e: string,
    f:  boolean,
    obj2: {
      g: number,
      h: string,
      i: boolean,
    }
  },
  obj3: {
    j: number,
    k: string,
    l: boolean,
  }
}

type UnionToIntersection<U> = 
  (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown ? R : never
type DeepPicks<T extends unknown,K extends string>=
  K extends `${infer L}.${infer R}`
    ? L extends keyof T
      ? {[key in L]:DeepPick<T[L],R>}
      : unknown
    : K extends `${infer R}`
      ? R extends keyof T
        ? {[key in R]:T[R]}
        : unknown
      : unknown
type DeepPick<T extends unknown,K extends string>=UnionToIntersection<DeepPicks<T,K>>
type d=DeepPick<Obj, 'obj.e'|'a'>
type cases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown >>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string }}>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>, { a: number } & { obj: { e: string }} & { obj: { obj2: { i: boolean } }}>>,
]