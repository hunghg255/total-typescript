type GetParamKeys<TTranslation extends string> = TTranslation extends ''
  ? []
  : TTranslation extends `${string}{${infer Param}}${infer Tail}`
  ? [Param, ...GetParamKeys<Tail>]
  : [];

type GetParamKeysAsUnion<TTranslation extends string> =
  GetParamKeys<TTranslation>[number];

const translate = <
  TTranslations extends Record<string, string>,
  TKey extends keyof TTranslations,
  TDynamicKeys = GetParamKeysAsUnion<TTranslations[TKey]>
>(
  translations: TTranslations,
  key: TKey,
  ...args: TDynamicKeys extends string
    ? [dynamicArgs: Record<TDynamicKeys, string>]
    : []
) => {
  const translation = translations[key];
  const params: any = args[0] || {};

  return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
};

const translations = {
  title: 'Hello, {name}!',
  subtitle: 'You have {count} unread messages.',
  button: 'Click me!',
} as const;

const buttonText = translate(translations, 'button');
