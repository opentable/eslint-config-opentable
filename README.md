# eslint-config-opentable

This package provides OpenTable's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

The export lints ES6/2015+. It requires `eslint`.

1. `npm install --save-dev eslint-config-opentable eslint`
2. add `"extends": "opentable"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

**Note**: eslint-config-airbnb also lints react, but we are not including that at this time.
There is no need to install its peer dependency "eslint-plugin-react".

## Major differences

The main difference between this config and airbnb's is that we have adopted
a more Coffeescript-like syntax as we begin the transfer from Coffeescript to ES6.

- Semicolons must be excluded. JS developers should understand Automatic Semicolon Insertion rules whether semicolons are used or not.
  For more info, see [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
  and [Everything You Need to Know About ASI](http://inimino.org/~inimino/blog/javascript_semicolon).
  Fortunately, eslint should warn when it looks like a semicolon is required, but it doesn't happen often.
- Double quotes instead of single.
- Console logs are allowed.
- Double equals (`==`) is allowed for one special case: `== null`. This allows you to determine equality with `undefined` and/or `null` in one statement.
- Function names are not required in function expressions.
- Nested ternaries are allowed.
- Comma dangle is turned off. Some consider this good practice, some don't. We don't.
- While we still enforce the capitalization convention when using `new`, we've included a very common capitalized factory function exception that should not be used with `new`: `$.Deferred`.

## Contributing
[TBD]
