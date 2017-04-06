# loopback-angular-social-auth

This project is fork of https://github.com/strongloop/loopback-example-user-management#project-layout. We were looking for few examples for social authentication with loopback angular. 
We couldn't find one. We decided to do one for ourselves. Hope others find it useful. This is work in progress. Please feel free to fork it or contribute 
via pull requests  

```
$ git clone 
$ cd loopback-example-user-management
$ npm install
$ bower install
$ node .
```

- [Project Layout]()

###### Notes
- You will need to server/datasource.json for email related features
- If you're using GMail, you can simply [replace the user and pass](https://github.com/strongloop/loopback-example-user-management/blob/master/server/datasources.json#L19-L20) with your own credentials.
- With GMail, you might need to temporarily allow "less secure" apps to access you email account. See [Allowing less secure apps to access your account](https://support.google.com/accounts/answer/6010255) for more information.

## Project features
- Passport JWT authentication
- Oauth with Google and Linkedin
- Verify email
- angular client
- MySQL

## Project Layout
- `common/models` contains the extended user files. `user.js` contains user the logic for sending emails and password reset, while `user.json` contains the model definition.
- `server/boot/authentication.js` enables authentication middleware with the `enableAuth()` method. It's this middleware that finds the access token id string (usually from the query string) and appends entire token instance onto the express request object as `req.accessToken`. From there, you can find the user's ID: `req.accessToken.userId` (used in the `routes.js` file, see directly below).
- `server/boot/routes.js` contains all the routing logic. In this example, we have used [ExpressJS](http://expressjs.com/) to configure the routing since each LoopBack app is an extended version of an Express app.
- `server/views`contains all the views (or pages) rendered by Express using the [EJS templating framework](http://www.embeddedjs.com/)
- `server/datasources.json` contains the datasource configurations. Here is where we add an email datasource.
- `server/model-config.json` contains the all the model configurations. Here is where we configure the extended user model (lowercase 'u') and the email model. The rest of the models are all built-in LoopBack models.
-  server/auth/auth.config.json contains  credentials for google and linkedin 


###### Todo
1. Form validation
2. Implement ACL 
3. Cassandra Support


---

[More LoopBack examples](https://loopback.io/doc/en/lb3/Tutorials-and-examples.html)
