// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";


// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

// Utilisez `FlatCompat` pour continuer d'utiliser les anciennes configs si nécessaire
const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        require: "readonly",  // Ajoutez les globales Node.js ici
        process: "readonly"
      }
    },
    rules: {
      // Ajoutez vos règles ici
    }
  },
  // Ajoutez d'autres configurations si nécessaire
];
