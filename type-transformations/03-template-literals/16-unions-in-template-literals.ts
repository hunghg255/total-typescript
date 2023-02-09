type BreadType = 'rye' | 'brown' | 'white';

type Filling = 'cheese' | 'ham' | 'salami';

type Sandwich = `${BreadType} sandwich with ${Filling}`;
