export default {
  '*.{js,cjs,mjs,json,ts}': ['eslint --no-error-on-unmatched-pattern --fix', 'prettier --write'],
  '*.{yml,yaml}': ['prettier --write'],
};
