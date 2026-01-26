import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ["node_modules", "build", "dist", "jules-scratch", "vite.config.ts"],
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react': pluginReact,
      'react-hooks': pluginReactHooks,
      'import': pluginImport,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginImport.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/no-unresolved': 'error',
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
            project: 'tsconfig.json'
        },
        alias: {
          map: [
            ['@', path.resolve(__dirname, './src')],
          ]
        }
      },
    },
  },
];
