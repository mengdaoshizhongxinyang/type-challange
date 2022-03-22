/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2022-03-15 10:41:14
 * @Description: 
Give an array, transform into an object type and the key/value must in the given array.

For example

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

 */

import { Equal, Expect } from '@type-challenges/utils'

type TupleToObject<T extends readonly string[]> = {
    [key in T[number]]:key
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>