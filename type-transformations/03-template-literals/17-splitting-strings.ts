import { S } from 'ts-toolbelt';
type Path = 'Users/John/Documents/notes.txt';

type SplitPath = S.Split<Path, '/'>;
