/* eslint-env node */

module.exports = {
  extends: ['near', 'next/core-web-vitals'], // https://nextjs.org/docs/basic-features/eslint#additional-configurations 'next/core-web-vitals' must be the last item in the array.
  globals: {
    JSX: true, // https://stackoverflow.com/a/65828055/470749
  },
  rules: {
    'func-style': 'off',
    'no-console': 'off',
  },
};
