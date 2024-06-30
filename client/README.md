## Cromwell Tech Test Frontend

## Tech Stack

- React
- React Router: for easy navigation
- Bootstrap: simple out of the box CSS framework
- React Testing Library: In-built testing library for unit tests

## Pages/Components

- Navbar: Includes as logo embedded with a link to the homepage. A search bar(not usable). Two links to Login and Register
- Homepage: Basic start of homepage
- Registration: Form that takes a user's username, email, password and confirm password. Sends a POST request to /user/register on submission.
- Login: Form that takes a user's email and password. Sends a POST request to /user/login on submission.
- Landing: Basic landing page that is navigated to when user logs in.

## Component Tree
![cromwell_component_tree](https://github.com/paulg44/cromwell_tech_test/assets/100803588/4b354f1e-173f-43aa-b9f8-dee8065fc990)


## Future Goals (if I had more time)

- More tests, particularly focusing on mocking the fetched data. I did start some of these, however, the way my application is set up I haven't found it easy to test. Because I put both the main fetch tests in the App.js file (I did this incase I added Auth) I've nopt been able to test the landing page adequately.
- Add an error messaged when logging if user doesn't exist
- Responsiveness of application
- More data on landing page and homepage

## Run Locally

CD into client directory
cd client

Install any dependencies
npm install

Start react app
npm start

Or to run tests
npm test

To make application work in development theres a few more steps

- In Landing.js file
- Uncomment Line 9
- Comment Out Line 10
- Change fetchUserDeploy on Line 14 to fetchUserDev

- In App.js file
- Uncomment Line 16 & 18
- Comment Out Line 14/15 & 17
- Change deployRegister on Line 31 to devRegister
- Change deployLogin on Line 54 to devLogin
