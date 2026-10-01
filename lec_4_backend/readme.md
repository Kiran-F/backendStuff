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


inside src folder we have some folders:
controllers: major functionality
db: database connection logic
middlewares: code that you want to run in between, some checkins, like authentication, authorization, etc.
models: data models/Schema
routes: to define routes
utils: utilities, for example file upload has to be done often, so we create a utility of it


install prettier other than the extention as well to avoid conflicts of semicolon and 2 space/ 4 space tab.
after installing prettier, we have to add 2 files manually ourselves: .prettierrc and .prettierignore



Summary of how to setup a backend project professionally:

Initialize Repository: Start with npm init to create a package.json file and set up a Git repository.
Project Structure: Organize code within a src/ directory, creating dedicated folders for controllers, database logic (db), middlewares, models, routes, and utilities.
Environment Security: Use a .env file for sensitive keys. Since .env files shouldn't be pushed to Git, create a .env.sample file to share the required configuration variables with your team.
Development Tools: Install Nodemon as a dev-dependency to automatically restart the server during development.
Code Consistency: Use Prettier to enforce formatting rules across the team. Create .prettierrc for configuration and .prettierignore to exclude files like .env or node_modules from formatting.
Folder Tracking: Use a .gitkeep file in empty directories to ensure Git tracks them for deployment.