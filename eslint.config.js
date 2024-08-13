import globals from "globals";
import pluginJs from "@eslint/js";



// Define custom globals for Mocha
// const mochaGlobals = {
//     describe: "readonly",
//     beforeEach: "readonly",
//     afterEach: "readonly",
//     it: "readonly",
//     after: "readonly",
// };

export default [
    pluginJs.configs.recommended, 
    {
          languageOptions: {
            globals: {
              ...globals.browser,
              ...globals.node,
            
            },
          },
    
      rules: {
        // 'no-unused-vars': 'off',     // warn or error or off
        // 'no-undef': 'warn',      
        // 'no-useless-catch': 'warn', 
      },
    },
  ];