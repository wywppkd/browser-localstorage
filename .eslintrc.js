module.exports = {
  ignorePatterns: ['.eslintrc.js'], // 忽略 .eslintrc.js 文件
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    REACT_APP_ENV: true,
    REACT_APP_API_URL: true,
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-shadow': ['off'], // 当前作用域变量名不能与父级作用域变量同名
    'no-plusplus': 'off',
    'global-require': 'off',
    'react-hooks/exhaustive-deps': 'error', // react-hooks 依赖检查
    'no-empty': 'off',
  },
};
