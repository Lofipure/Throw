module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 150,
  tabWidth: 2,
  useTabs: false,
  importOrder: ['^react*', '^(@?)[a-zA-Z](.*)$', '^@/', '^[./](.*)(?<!(less|scss))$', '(less|scss)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
