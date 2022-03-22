
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'
type Split<T extends string,P extends string>=T extends `${infer L}${P}${infer R}`
  ?[L,...Split<R,P>]
  :T extends ""
    ? P extends ""
      ?[]
      :[T]
    : T extends `${infer R}`
      ?[T]
      :string[]

type d=Split<string, 'whatever'>




type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]