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


app -> express.js
database connection -> mongoose



The Relationship in Simple Terms
• Cookie: The physical envelope. It is just a storage location in the browser that automatically flies back and forth between the browser and the server.
• Session: A "Server-Side" approach. The data lives on the server's computer, and the cookie just carries an ID number to look it up.
• Token: A "Client-Side" approach. The data lives directly inside the token itself, acting like a self-contained, digital passport. The cookie is often used to safely hold this passport.



We have two approaches: session approach and JWT appraoch.
That is the core difference between the two systems:
• Session Approach: Every single request requires a database or memory lookup just to answer the question: "Who owns this Session ID, and are they logged in?" [A1]
• JWT Approach: The server decodes the token, sees the valid signature, and answers its own question: "The signature is real, so this token tells me exactly who you are and that you are logged in." No query needed [A1].







The Token Approach (The Digital Passport)
This is the modern method (often using JWTs).

------When the User Logs In--------
1. The user types their username and password and hits Submit.
2. The server verifies the password is correct.
3. Instead of saving anything in its database, the server creates a Token. Inside this token, it writes: "This is John Doe, User ID 55".
4. The server locks this token with a secret digital signature that only the server knows.
5. The server places this Token inside a Cookie and sends it to the browser


--------When the User Makes a Request (e.g., viewing their profile):-------
1. The browser automatically attaches the Cookie (containing the encrypted Token) to the request.
2. Your server receives the request. app.use(cookieParser()) extracts the token.
3. The server checks the digital signature. If the signature matches, the server trusts the data inside it without looking at a database.
4. It reads "This is John Doe", and instantly sends John's profile data back