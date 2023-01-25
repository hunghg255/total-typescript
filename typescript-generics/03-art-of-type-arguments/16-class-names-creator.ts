// Solution 1
const createClassNamesFactory1 =
  <TVariant extends string>(classes: Record<TVariant, string>) =>
  (type: TVariant, ...otherClasses: string[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(' ');
  };

// Solution 2
const createClassNamesFactory2 =
  <TClasses extends Record<string, string>>(classes: TClasses) =>
  (type: keyof TClasses, ...otherClasses: string[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(' ');
  };

const getBg = createClassNamesFactory1({
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
});
