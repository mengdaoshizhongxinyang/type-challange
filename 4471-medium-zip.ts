/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2022-03-15 10:49:23
 * @Description: 
In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple

type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
 */

import { Equal, Expect } from '@type-challenges/utils'

type Zip<T extends unknown[], Z extends unknown[]> =
    T extends [infer TL, ...infer TR]
    ? Z extends [infer ZL, ...infer ZR]
        ? [[TL, ZL], ...Zip<TR, ZR>]
        : []
    : []


type cases = [
    Expect<Equal<Zip<[], []>, []>>,
    Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
    Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
    Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
    Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]