Cromwell Tech Test Backend

## Tech Stack

- Node.js: JavaScript runtime environment
- Express: Framework for handling HTTP requests
- Postgres: Database for storing users
- pg:
- dotenv: a package for importing env variables from the .env file
- cors

## Future Goals (if I had more time)

- Adding authorization through JWT, I had an attempt at this but didn't have the time to implement it fully
- Proper logout, currently it's more visual than functional
- Full test suite, testing routes and handlers
- Check an email is not already registered

## Run server locally

CD into client directory
cd server

Install any dependencies
npm install

Start react app
node server.js

To make application work ENV variables are needed (in a normal production project, you should NEVER include these private variables)

- create a new file in the server folder called .env
- Add REACT_APP_DB_STRING=postgres://mwtabzwr:J-bcbqRAS14FU7A8GDzv85ncfLPKc7V8@flora.db.elephantsql.com/mwtabzwr
- Add REACT_APP_PORT=4550
