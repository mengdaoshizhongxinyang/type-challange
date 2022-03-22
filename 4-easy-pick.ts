/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2022-03-15 10:35:02
 * @Description: 
Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T

For example

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
 */



import { Equal, Expect } from '@type-challenges/utils'
type MyPick<T, K extends keyof T> = {
    [key in K]:T[key]
}

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}