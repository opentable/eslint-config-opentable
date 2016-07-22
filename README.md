# eslint-config-opentable ![Travis](https://travis-ci.org/opentable/eslint-config-opentable.svg?branch=master)

This package provides OpenTable's .eslintrc as an extensible shared config. We extend [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).

## Usage

The export lints ES6/2015+. It requires `eslint`.

1. `npm install --save-dev eslint-config-opentable eslint`
2. add `"extends": "opentable"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Dependencies

Note that ESLint 3.0+, which is a dependency of this config, requires Node 4+.

## Differences with AirBnB

There are a few minor differences between this config and AirBnB's. Links are to AirBnB's styleguide.

- [15.1](https://github.com/airbnb/javascript#comparison--eqeqeq) eqeqeq (prefer `===` to `==`) - **Yes, but with "allow-null" turned on**

  > Why? Comparing to both `null` and `undefined` can be done succinctly with `== null`.
  This is now enabled in AirBnB's config as well, but the style guide has not been updated.

- [18.12](https://github.com/airbnb/javascript#whitespace--max-len) Max line length: 100 - **Increased to 120**

  > Why? We just wanted to allow longer lines.

- [19.2](https://github.com/airbnb/javascript#commas--dangling) Comma dangle - **No**

  > Why? We found the extra comma distracting.

- [22.3](https://github.com/airbnb/javascript#naming--PascalCase) Use PascalCase only when naming constructors or classes. - **Yes, but one exception**

  > Why? We added $.Deferred as a common exception, since it should not be used with the `new` keyword.

