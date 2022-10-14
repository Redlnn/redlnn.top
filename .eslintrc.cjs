module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es2021: true,
  },

  plugins: ['prettier', 'vue'],

  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'prettier/prettier': 'warn',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
  },

  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'no-var': 'error',
        'no-useless-return': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
      rules: {
        'no-var': 'error',
        'no-useless-return': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      },
    },
    {
      files: ['*.vue'],
      globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly',
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // disable for setup script
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
