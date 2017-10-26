module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),
  rules: {
    // Disallow comma-dangle
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, 'never'],

    // Neither required nor prohibited
    // AirBnB used to enable this, but since
    // changed their rule to prefer
    // function declarations and arrow functions
    // to avoid function expressions.
    // There's no difference here, just a precaution.
    // http://eslint.org/docs/rules/func-names
    'func-names': 0,

    // specify the maximum length of a line
    // http://eslint.org/docs/rules/max-len
    'max-len': [2, {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true
    }],

    // Adds $.Deferred as an exception to the new-cap
    // rule, since it should not be used with new
    // http://eslint.org/docs/rules/new-cap
    'new-cap': [2, {
      capIsNewExceptions: ['$.Deferred']
    }],

    // A minor difference for assignments in a conditional expression
    // Instead of setting to ''always'', parenthesis make an assignment explicit
    // This is not explained in the AirBnB style guide either
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': [2, 'except-parens']
  }
};
