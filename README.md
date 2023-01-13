# Simple Bets

A simple starter application used to build out a user authenication flow.

## AWS Amplify

1. Create an AWS Cognito instance. Choose all the defaults.
   - also create an app client (with no secret)
2. Configure AWS Amplify in the client app. [docs](https://docs.amplify.aws/lib/auth/start/q/platform/js/#configure-your-application)

   ```
   // aws-exports.js

   export default {
     Auth: {
       region: "XXX",
       userPoolId: "XXX",
       userPoolWebClientId: "XXX",
     },
   };
   ```

3. Add signup, login, and logout. [docs](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/)
