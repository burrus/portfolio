module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["plugin:vue/essential"],
    parserOptions: { "parser": "@babel/eslint-parser" },
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "arrow-parens": ["error", "always"],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
        }],
        "function-paren-newline": ["error", "never"],
        "global-require": "off",
        "implicit-arrow-linebreak": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-irregular-whitespace": ["error", { skipComments: true }],
        "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
        "operator-linebreak": "off",
        "wrap-iife": "off",
    },
}
