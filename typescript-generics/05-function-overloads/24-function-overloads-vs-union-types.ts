// Solution 1
function runGenerator(generator: () => string): string;
function runGenerator(generator: { run: () => string }): string;
function runGenerator(generator: { run: () => string } | (() => string)) {
  if (typeof generator === 'function') {
    return generator();
  }
  return generator.run();
}

// Solution 2
function runGenerator2(generator: { run: () => string } | (() => string)) {
  if (typeof generator === 'function') {
    return generator();
  }
  return generator.run();
}

const result = runGenerator2({
  run: () => 'hello',
});

const result2 = runGenerator2(() => 'hello');
