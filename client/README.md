## Cromwell Tech Test Frontend

## Tech Stack

- React
- React Router: for easy navigation
- Bootstrap: simple out of the box CSS framework
- React Testing Library: In-built testing library for unit tests

## Future Goals (if I had more time)

- More tests, particularly focusing on mocking the fetched data. I did start some of these, however, the way my application is set up I haven't found it easy to test. Because I put both the main fetch tests in the App.js file (I did this incase I added Auth) I've nopt been able to test the landing page adequately.
- Responsiveness of application
- More data on landing page

## Run Locally

Clone repository
git clone https://github.com/paulg44/cromwell_tech_test.git

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
