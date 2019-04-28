graphql-error-tracking-extension
================================

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