module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],

  plugins: ['prettier', 'vue'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    // 'semi': [ 'error', 'nerver' ],
    'no-undef': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 'error',
    'no-useless-return': 'error',
    'prettier/prettier': 'error',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
