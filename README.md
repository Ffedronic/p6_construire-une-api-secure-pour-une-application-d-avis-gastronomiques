# HOT TAKES #

## Context

Creation of a secure API for an application dedicated to the evaluation of spicy sauces, created by Piiquante, by its customers, to take advantage of its success. Users will be able to add their favorite sauces, like or dislike other people's favorite sauces.
### Requested Specifications
- The user's password must be hashed.
- Authentication should be strengthened on all required sauce routes.
- Email addresses in the database are unique and a appropriate Mongoose plugin is used to ensure their uniqueness and signal Errors.
- The security of the MongoDB database (from a service such as MongoDB Atlas) should not prevent the application from launching on the user's machine.
- A Mongoose plugin must ensure the reporting of errors from the database of data.
- The most recent versions of the software are used with patchessecurity updates.
- The contents of the images folder should not be uploaded to GitHub.

***
## Installation and Usage ##
### Front-End Application:
For the frontend application, here are the dependancies you need to install:
- NodeJS 12.14 or 14.0,
- Angular CLI 7.0.2,
- node-sass : make sure to use the corresponding version to NodeJS. For Noe 14.0 for instance, you need node-sass in version 4.14+.  

On Windows, these installations require to use PowerShell in administrator mode.  
Then, clone this repo (https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6), run `npm install`, and run `npm install  --save-dev run-script-os`.  
To start the frontend application, run `npm start`. This should both run the local server and launch your browser.  
If your browser fails to  launch, or shows a 404 error, navigate your browser to http://localhost:8080.  
The app should reload automatically when you make a change to a file.  
Use `Ctrl+C` in the terminal to stop the local server.  
### Back-End Application:
For the backend application, here are the dependancies you need to install:
- "bcrypt 5.0.1": a library to help you hash passwords,
- "dotenv 10.0.0": dotenv is a zero-dependency module that loads environment variables from the .env file,
- "express 4.17.1": fast, unopinionated, minimalist web framework for node,
- "jsonwebtoken 8.5.1": for the implementation of JSON Web Tokens,
- "mongoose 6.0.11": Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment,
- "mongoose-unique-validator" 3.0.0: mongoose-unique-validator is a plugin which adds pre-save validation for unique fields within a Mongoose schema,
- "multer 1.4.3": Multer is a node.js middleware which is primarily used for uploading files,
- "password-validator 5.2.0": validates password according to flexible and intuitive specifications,
- "path 0.12.7": the path module provides utilities for working with file and directory paths,
- "fs": The fs module enables interacting with the file system,
- "helmet 4.6.0".  

Then, run `nodemon server` at the root folder containing the backend application.  
*The port "3000"* will be used by the server to listen the frontend application's requests.  
The server should reload automatically when you make a change to a file.  
Use `Ctrl+C` in the terminal to stop the server.

***