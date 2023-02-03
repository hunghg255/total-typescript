const makeFormValidatorFactory =
  <TValidatorKeys extends string>(
    validators: Record<TValidatorKeys, (value: string) => string | void>
  ) =>
  <TObjKeys extends string>(
    config: Record<TObjKeys, Array<TValidatorKeys>>
  ) => {
    return (values: Record<TObjKeys, string>) => {
      const errors = {} as Record<TObjKeys, string | undefined>;

      for (const key in config) {
        for (const validator of config[key]) {
          const error = validators[validator](values[key]);
          if (error) {
            errors[key] = error;
            break;
          }
        }
      }

      return errors;
    };
  };

const createFormValidator = makeFormValidatorFactory({
  required: (value) => {
    if (value === '') {
      return 'Required';
    }
  },
  minLength: (value) => {
    if (value.length < 5) {
      return 'Minimum length is 5';
    }
  },
  email: (value) => {
    if (!value.includes('@')) {
      return 'Invalid email';
    }
  },
});

const validateUser = createFormValidator({
  id: ['required'],
  username: ['required', 'minLength'],
  email: ['required', 'email'],
});

const errors = validateUser({
  id: '1',
  username: 'john',
  email: 'Blah',
});
