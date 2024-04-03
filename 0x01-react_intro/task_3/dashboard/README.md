Requirements:

When running, there should not be any lint error in the console
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_0/dashboards/src/, task_0/dashboard/src/App.css, task_0/dashboard/src/App.js
 
1. Basic Application
mandatory
Repo:

GitHub repository: alx-react
Directory: 0x00-react_introduction
File: task_0/dashboards/src/, task_0/dashboard/src/App.css, task_0/dashboard/src/App.js
2. Embedding expressions, functions
mandatory
Using your code from the previous task, in task_1/dashboard/src/utils.js:

Create a function named getFullYear that will return the current year
Create a function named getFooterCopy:
It accepts one argument isIndex(boolean). When true, the function should return Holberton School. When false, the function should return Holberton School main dashboard
Modify the footer returned in task_1/dashboard/src/App.js to use these two functions
in task_1/dashboard/src/Notifications.js, create a Notifications element:

It should import React
It should export a function
The function should return a div with the class Notifications
The div should contain a paragraph with the text Here is the list of notifications
import the file Notifications.css.
in task_1/dashboard/src/Notifications.css, style the Notifications class:

Add a border and some padding around the div
Render the Notifications element:

Modify task_1/dashboard/src/index.js to render the new element (Notifications) in a div named root-notifications
Check that you can see the two elements on the browser, and using the React browser extension
Requirements:

When running, there should not be any lint error in the console
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_1/dashboard/src/, task_1/dashboard/src/utils.js, task_1/dashboard/src/App.js, task_1/dashboard/src/Notifications.css, task_1/dashboard/src/Notifications.js, task_1/dashboard/src/index.js
3. Modify the App
mandatory
using your code from the previous task, in task_2/dashboard/src/App.js under the paragraph that says Login to access the full dashboard:

add a label and input for email
add a label and input for password
when the user clicks on a label, it should select the corresponding input
add one button element with the text “OK”
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_2/dashboard/src/, task_2/dashboard/src/App.js
4. Modify the Notifications
mandatory
in task_2/dashboard/src/utils.js:

Create a function named getLatestNotification that returns the following string: <strong>Urgent requirement</strong> - complete by EOD
in task_2/dashboard/src/Notifications.js in the Notifications div:

add a button element with inline styling (without using the CSS file):
show button on right side of notifications box
aria-label is Close
when user clicks on the button it logs to the console Close button has been clicked
in the button element add a children img element that will import the close-icon.png image
after the paragraph add an unordered list
the list has the following items:
The first one has a default priority and says New course available
The second one has a urgent priority and says New resume available
Add the priority to the first and second items of the list using a data attribute
The last item correctly displays the content of getLatestNotification using dangerouslySetInnerHTML
in task_2/dashboard/src/Notifications.css:

style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.
Requirements:

When running, there should not be any lint error in the console
Your app should look like the following screenshot:


Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_2/dashboard/src/, task_2/dashboard/src/utils.js, task_2/dashboard/src/Notifications.js, task_2/dashboard/src/Notifications.css
5. Create basic tests with four tests
mandatory
in task_3/dashboard/src/utils.test.js:

Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
Write a test to check that getFooterCopy returns the correct string when the argument is true or false
Write a test checking the returned string for getLatestNotification
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_3/dashboard/src/utils.test.js
6. Install Enzyme
mandatory
Install Enzyme with npm
Create a file named setupTests.js and configure the adapter for Enzyme
Repo:

GitHub repository: alx-react
Directory: 0x01-react_intro
File: task_3/dashboard/src/setupTests.js
