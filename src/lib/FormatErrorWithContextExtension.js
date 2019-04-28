const { GraphQLExtension } = require('graphql-extensions');

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

class FormatErrorWithContextExtension extends GraphQLExtension {
  constructor(formatError) {
    super();
    this.formatError = formatError;
  }

  willSendResponse(o) {
    const { context, graphqlResponse } = o;
    if (graphqlResponse.errors && isFunction(this.formatError)) {
      graphqlResponse.errors = graphqlResponse.errors.map(err => this.formatError(err, context));
    }
    return o;
  }
}

module.exports = FormatErrorWithContextExtension;
