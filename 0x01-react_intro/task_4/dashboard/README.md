7. Create React tests
mandatory
in task_3/dashboard/src/App.test.js create four tests:

test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer
in task_3/dashboard/src/Notifications.test.js create three tests

test that Notifications renders without crashing
verify that Notifications renders three list items
verify that Notifications renders the text Here is the list of notifications
Requirements:

When running the test suites, you should see the following result
You must use shallow rendering to write the React tests
Test Suites: 3 passed, 3 total
Tests: 11 passed, 11 total
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_3/dashboard/src/App.test.js, task_3/dashboard/src/Notifications.test.js
8. Deploy to a GitHub page
mandatory
Deploy your application to GitHub Pages using gh-pages branch and create-react-app

Your application should be working correctly when accessing the GitHub URL.

Add URLs here:
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_4/
9. Create a project using Webpack
mandatory
Without reusing create-react-app or the code from the previous exercise, start a brand new npm project

Reusing what you learned during the Webpack module:

Set up a system to output a bundle.js file in a dist folder
Set up a dev server with hot reloading
Create a src folder that will contain your Javascript
Set up a simple html file in the dist folder that will import the bundle file in the body tag.
Install and configure the various plugins to support:

inline source map
style loader
css loader
image webpack loader
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_5/dashboard/config/webpack.config.js, task_5/dashboard/dist/index.html, task_5/dashboard/src/index.js
 
10. Install Babel
mandatory
Install Babel, and in task_5/dashboard/.babelrc, add the presets for preset-env and preset-react
Add a babel-loader to the Webpack configuration so you can support js and jsx files
Import the files that you wrote in the previous task. All the Javascript and React code should be within the src folder
At this point, running webpack-dev-server should correctly execute your code, and you should be able to see the dashboard like in the last task

Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_5/dashboard/.babelrc, task_5/dashboard/config/webpack.config.js
11. Reorganize the files
mandatory
Let’s reorganize the files in our project:

Every file related to the App, should be within a App folder
Every file related to the Notifications, should be within a Notifications folder
Every file related to the utils functions, should be within a utils folder
Every asset file should be within the assets folder
Set up the favicon.ico in the dist folder
Webpack config file should be within a config folder if it isn’t already
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_5/dashboard/src/App/App.css, task_5/dashboard/src/App/App.js, task_5/dashboard/src/App/App.test.js, task_5/dashboard/src/Notifications/Notifications.css, task_5/dashboard/src/Notifications/Notifications.js, task_5/dashboard/src/Notifications/Notifications.test.js, task_5/dashboard/src/utils/utils.js, task_5/dashboard/src/utils/utils.test.js, task_5/dashboard/config/webpack.config.js, task_5/dashboard/src/assets/holberton-logo.jpg, task_5/dashboard/dist/favicon.ico
 
12. Testing
mandatory
Install Jest and Enzyme to run your test suites

move the setupTests.js file to config folder if you have not already

Requirements:

Your package.json should have the two following scripts:
    "start": "webpack-dev-server --mode development --config config/webpack.config.js",
    "test": "jest"
Running the first script should start your dev server and build without any error
Running the second script should start your test suites and pass for each test
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_5/dashboard/config/setupTests.js, task_5/dashboard/package.json
7. Create React tests
mandatory
in task_3/dashboard/src/App.test.js create four tests:

test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer
in task_3/dashboard/src/Notifications.test.js create three tests

test that Notifications renders without crashing
verify that Notifications renders three list items
verify that Notifications renders the text Here is the list of notifications
Requirements:

When running the test suites, you should see the following result
You must use shallow rendering to write the React tests
Test Suites: 3 passed, 3 total
Tests: 11 passed, 11 total
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_3/dashboard/src/App.test.js, task_3/dashboard/src/Notifications.test.js
8. Deploy to a GitHub page
mandatory
Deploy your application to GitHub Pages using gh-pages branch and create-react-app

Your application should be working correctly when accessing the GitHub URL.

Add URLs here:
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_4/
9. Create a project using Webpack
mandatory
Without reusing create-react-app or the code from the previous exercise, start a brand new npm project

Reusing what you learned during the Webpack module:

Set up a system to output a bundle.js file in a dist folder
Set up a dev server with hot reloading
Create a src folder that will contain your Javascript
Set up a simple html file in the dist folder that will import the bundle file in the body tag.
Install and configure the various plugins to support:

inline source map
style loader
css loader
image webpack loader
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_5/dashboard/config/webpack.config.js, task_5/dashboard/dist/index.html, task_5/dashboard/src/index.js
 
10. Install Babel
mandatory
Install Babel, and in task_5/dashboard/.babelrc, add the presets for preset-env and preset-react
Add a babel-loader to the Webpack configuration so you can support js and jsx files
Import the files that you wrote in the previous task. All the Javascript and React code should be within the src folder
At this point, running webpack-dev-server should correctly execute your code, and you should be able to see the dashboard like in the last task

Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_5/dashboard/.babelrc, task_5/dashboard/config/webpack.config.js
11. Reorganize the files
mandatory
Let’s reorganize the files in our project:

Every file related to the App, should be within a App folder
Every file related to the Notifications, should be within a Notifications folder
Every file related to the utils functions, should be within a utils folder
Every asset file should be within the assets folder
Set up the favicon.ico in the dist folder
Webpack config file should be within a config folder if it isn’t already
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_5/dashboard/src/App/App.css, task_5/dashboard/src/App/App.js, task_5/dashboard/src/App/App.test.js, task_5/dashboard/src/Notifications/Notifications.css, task_5/dashboard/src/Notifications/Notifications.js, task_5/dashboard/src/Notifications/Notifications.test.js, task_5/dashboard/src/utils/utils.js, task_5/dashboard/src/utils/utils.test.js, task_5/dashboard/config/webpack.config.js, task_5/dashboard/src/assets/holberton-logo.jpg, task_5/dashboard/dist/favicon.ico
 
12. Testing
mandatory
Install Jest and Enzyme to run your test suites

move the setupTests.js file to config folder if you have not already

Requirements:

Your package.json should have the two following scripts:
    "start": "webpack-dev-server --mode development --config config/webpack.config.js",
    "test": "jest"
Running the first script should start your dev server and build without any error
Running the second script should start your test suites and pass for each test
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_5/dashboard/config/setupTests.js, task_5/dashboard/package.json

