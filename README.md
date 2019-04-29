graphql-format-error-context-extension
================================

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![license][license-image]][license-url]

[npm-image]: https://img.shields.io/npm/v/graphql-format-error-context-extension.svg?style=flat-square
[npm-url]: https://npmjs.org/package/graphql-format-error-context-extension
[travis-image]: https://img.shields.io/travis/BigMaster/graphql-format-error-context-extension.svg?style=flat-square
[travis-url]: https://travis-ci.org/BigMaster/graphql-format-error-context-extension
[codecov-image]: https://codecov.io/gh/BigMaster/graphql-format-error-context-extension/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/BigMaster/graphql-format-error-context-extension
[david-image]: https://img.shields.io/david/BigMaster/graphql-format-error-context-extension.svg?style=flat-square
[david-url]: https://david-dm.org/BigMaster/graphql-format-error-context-extension
[snyk-image]: https://snyk.io/test/npm/graphql-format-error-context-extension/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/graphql-format-error-context-extension
[download-image]: https://img.shields.io/npm/dm/graphql-format-error-context-extension.svg?style=flat-square
[download-url]: https://npmjs.org/package/graphql-format-error-context-extension
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://opensource.org/licenses/MIT

## Usage

* This package needs `graphql-extensions` to be installed: `npm i graphql-extensions --save`
* Install the npm package as a dependency `npm i graphql-format-error-context-extension --save`
* Add this extension and use `context` on formatError like this:

```js
const { ApolloServer } = require('apollo-server-koa');
const { FormatErrorWithContextExtension } = require('graphql-format-error-context-extension');

const formatError = (err, context) => {
  // can use `err` and `context`
  return err;
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    extensions: [() => new FormatErrorWithContextExtension(formatError)],
    context: ({ ctx }) => ctx,
});
```
