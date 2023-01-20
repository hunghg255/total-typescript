export type Letters = 'a' | 'b' | 'c';

type RemoveC<TType> = TType extends 'c' ? never : TType;

type WowWithoutC = RemoveC<Letters>;
