module.exports = {
  root: true,
  extends: [
    '@cyansalt/preset',
  ],
  parserOptions: {
    project: './tsconfig.tools.json',
  },
  ignorePatterns: [
    '.eslintrc.js',
  ],
  rules: {
    'vue/no-setup-props-destructure': 'off',
    'vue/no-undef-components': 'error',
    'vue/no-undef-properties': 'error',
  },
}
