module.exports = {
  extends: require.resolve("eslint-config-airbnb/base"),
  rules: {
    "comma-dangle": [2, "never"],
    eqeqeq: [2, "allow-null"],
    "func-names": 0,
    indent: [2, 2, { SwitchCase: 1 }],
    "max-len": [1, 120],
    "new-cap": [2, {
      capIsNewExceptions: ["$.Deferred"]
    }],
    "no-cond-assign": [2, "except-parens"],
    "no-console": 0,
    "no-nested-ternary": 0,
    "one-var": [2, {
      uninitialized: "always",
      initialized: "never"
    }],
    "one-var-declaration-per-line": 0,
    quotes: [2, "double", "avoid-escape"],
    semi: [2, "never"],
    "space-before-function-paren": [2, "never"]
  }
}
