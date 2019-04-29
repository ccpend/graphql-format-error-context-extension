import { FormatErrorWithContextExtension } from "../../src/lib/FormatErrorWithContextExtension";

describe('FormatErrorWithContextExtension', () => {
  describe('willSendResponse', () => {
    it('Check willSendResponse() result', () => {
      const formatError = (err, context) => {
        err.test = context.test;
        return err;
      };

      const extension = new FormatErrorWithContextExtension(formatError);
      const graphqlResponse = {
        errors: [
          {
            error: {
              message: 'error message',
            },
          },
        ],
      };

      const context = {
        test: 'hehe'
      };

      const errorResult = extension.willSendResponse({
        graphqlResponse,
        context,
      });

      expect(errorResult).toMatchObject({
        graphqlResponse:{
          errors:[
            {
              error:{
                message:'error message'
              },
              test: 'hehe',
            },
          ],
        },
        context: {
          test: 'hehe',
        },
      });
    });
  });
});
