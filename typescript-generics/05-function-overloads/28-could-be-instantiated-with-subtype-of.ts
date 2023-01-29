const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

type ObjKey = keyof typeof obj;

function getObjValue(): typeof obj['a'];
function getObjValue<TKey extends ObjKey>(key: TKey): typeof obj[TKey];
function getObjValue(key: ObjKey = 'a') {
  return obj[key];
}

const one = getObjValue('a');
const oneByDefault = getObjValue();
const two = getObjValue('b');
const three = getObjValue('c');
