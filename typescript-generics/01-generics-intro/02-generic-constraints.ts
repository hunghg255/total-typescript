export const returnWhatIPassIn = <T extends string>(t: T) => t;

returnWhatIPassIn('hung');

returnWhatIPassIn(1);

returnWhatIPassIn(true);

returnWhatIPassIn({
  foo: 'bar',
});
