type TemplateLiteralKey = `${'user' | 'post' | 'comment'}${'Id' | 'Name'}`;

type ObjectOfKeys = Record<TemplateLiteralKey, string>;
