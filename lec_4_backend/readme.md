Notes from backend course: things to remember
this is the project created to setup the backend.

in javascript, we import expressjs in 2 ways: using common js and module js.
if we use module js we have to define type in package.json
add "type": "module", in package.json


Normally, whenever there's any change in backend, you have to restart the server to render the changes.
but we can use nodemon, the only thing it does is that it restarts the server whenever there's any change in backend.

dev dependency: dependency that is required for development, no function in production and we don't take it there.
if we use the command "npm i nodemon", nodemon becomes main dependency.
so to make only dev dependency we use command: "npm i -D nodemon"