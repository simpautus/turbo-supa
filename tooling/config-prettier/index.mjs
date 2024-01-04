/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  tailwindFunctions: ['cn', 'cva'],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  tailwindConfig: '../../packages/ui/tailwind.config',
  importOrder: [
    '<TYPES>',
    '<TYPES>^[.]',
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '^(next/(.*)$)|^(next$)',
    '^(expo(.*)$)|^(expo$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@repo/(.*)$',
    '',
    '^~/',
    '^[../]',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '4.4.0',
}

export default config
