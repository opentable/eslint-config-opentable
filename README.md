![OpenTable](https://media.otstatic.com/img/logo-fb47603a815bb1cf3e89400ba14587f1.png)

# eslint-config-opentable [![Build Status](https://travis-ci.org/opentable/eslint-config-opentable.svg?branch=master)](https://travis-ci.org/opentable/eslint-config-opentable)

This package provides OpenTable's .eslintrc as an extensible shared config. We extend [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).

## Usage

The export lints ES6/2015+. It requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-opentable eslint`
2. add `"extends": "opentable"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Dependencies

Note that ESLint 3.0+, which is a dependency of this config, requires Node 4+.
For support in Node <4, use eslint-config-opentable version 4.x.

## Differences with AirBnB

There are a few minor differences between this config and AirBnB's. Links are to AirBnB's styleguide.

- [18.12](https://github.com/airbnb/javascript#whitespace--max-len) Max line length: 100 - **Increased to 120**

  > Why? We just wanted to allow longer lines.

- [19.2](https://github.com/airbnb/javascript#commas--dangling) Comma dangle - **No**

  > Why? We found the extra comma distracting.

- [22.3](https://github.com/airbnb/javascript#naming--PascalCase) Use PascalCase only when naming constructors or classes. - **Yes, but one exception**

  > Why? We added $.Deferred as a common exception, since it should not be used with the `new` keyword.

## Maintainers

This repo doesn't change too often, so issues or requests may not be noticed quickly. Please contact the maintainers directly to call an issue to their attention.

- [Kalev Roomann-Kurrik](mailto:kroomannkurrik@opentable.com)
- [Ward Ruth](mailto:wruth@opentable.com)
- [Wesley Windrose](mailto:wwindrose@opentable.com)
