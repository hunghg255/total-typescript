interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

interface Post {
  id: string;
  comments: { value: string }[];
  meta: {
    name: string;
    description: string;
    comments: {
      value: string;
    }[];
  };
}

const post: Partial<Post> = {
  id: '1',
  meta: {
    description: '11',
  },
};

const postDeep: DeepPartial<Post> = {
  id: '1',
  meta: {
    description: '11',
    comments: [
      {
        value: '12',
      },
    ],
  },
};
