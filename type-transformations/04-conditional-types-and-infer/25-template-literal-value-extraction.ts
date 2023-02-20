import { S } from 'ts-toolbelt';

type Names = [
  'Matt Pocock',
  'Jimi Hendrix',
  'Eric Clapton',
  'John Mayer',
  'BB King'
];

type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;

type GetSurname1<T extends string> = S.Split<T, ' '>[1];

type tests = GetSurname1<Names[0]>;
