import { String, Union } from 'ts-toolbelt';

const query = `/home?a=foo&b=wow`;

// Old type
type QueryParams = {
  a: 'foo';
  b: 'wow';
};

// New Type
type Query = typeof query;

type SecondQueryPart = String.Split<Query, '?'>[1];

type QueryElements = String.Split<SecondQueryPart, '&'>;

type NewQueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, '='>[0]]: String.Split<
      QueryElement,
      '='
    >[1];
  };
}[QueryElements[number]];

const obj: Union.Merge<NewQueryParams> = {
  a: 'foo',
  b: 'wow',
};
