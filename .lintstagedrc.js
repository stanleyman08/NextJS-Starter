module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run build-types',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx)': (filenames) => ['eslint --fix', 'eslint'],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': ['prettier --write'],
}
