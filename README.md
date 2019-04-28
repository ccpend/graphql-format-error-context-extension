graphql-format-error-context-extension
================================

[![npm version](http://img.shields.io/npm/v/graphql-format-error-context-extension.svg?style=flat)](https://npmjs.org/package/graphql-format-error-context-extension "View this project on npm")

## Usage

* This package needs `graphql-extensions` to be installed: `npm i graphql-extensions --save`
* Install the npm package as a dependency `npm i graphql-error-tracking-extension --save`
* Add this extension and use `context` on formatError like this:

```js
import { ApolloServer } from 'apollo-server-koa';
import { FormatErrorWithContextExtension } from 'graphql-format-error-context-extension';

const formatError = (err, context) => {
  // can use `err` and `context`
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    extensions: [() => new FormatErrorWithContextExtension(formatError)],
    context: ({ ctx }) => ctx,
});
```