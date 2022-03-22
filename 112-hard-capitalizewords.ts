/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2022-03-15 09:42:23
 * @Description: 
Implement CapitalizeWords<T> which converts the first letter of each word of a string to uppercase and leaves the rest as-is.
For example

type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
 */
import { Equal, Expect } from '@type-challenges/utils'
type CapitalizeWord<S extends string> =
    S extends `${infer L}${infer R}` ?
    L extends ' ' | ',' | '.' ?
    `${L}${CapitalizeWord<Capitalize<R>>}` : `${L}${CapitalizeWord<R>}`
    :S
type CapitalizeWords<S extends string>=CapitalizeWord<Capitalize<S>>

type cases = [
    Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
    Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
    Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
    Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
    Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
    Expect<Equal<CapitalizeWords<' foo bar.hello,world'>, ' Foo Bar.Hello,World'>>,
    Expect<Equal<CapitalizeWords<''>, ''>>,
]