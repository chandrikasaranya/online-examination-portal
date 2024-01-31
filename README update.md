# Authentication Service #
Project Code: E0001

Authentication Service is part of Online Exam Mongodb Database Infrastructure.

### E0001-001: Register ###

* Actor: User without User ID
* Pre Condition:

1. User should have a working email-id which is not already registered with Online Exam Mongodb Database.

* Input:

1. First Name of the User.
2. Last Name of the User.
3. Working email id.
4. Phone Number.
5. Preferred password.
6. Confirm Password.

* Sequence:

1. User opens the webpage and click on 'Register'.
2. Registration page appears.
3. User supplies the required details.
4. Page redirects to  Activationn Page for Submitting activation code.
5. User enters the activation code.
6. Page displays success message and redirects to login page.

* Post Condition:

1. Page displays success message and the login page appears.

* Exceptions:

1. Registration page re-appears with appropriate message if user enters invalid name or invalid email-ID or invalid password.
2. Registration page re-appears with appropriate message if the email-ID is already registered with Online Exam Mongodb Database.
3. Registration page will not show any special message if the email-ID is not reachable. It just prompts for activation code, as usual.

### E0001-002: Login with Inactive User-ID ###

* Actor: User with Inactive User-ID

* Pre Condition:

1. User should have a registered User ID and password with Online Exam Mongodb Database.

* Input:

1. Email.
2. Password.

* Sequence:

1. User opens the webpage and click on ‘Login’.
2. Login page appears.
3. User supplies User ID and password.
4. Page indicates that the User ID is yet to be activated.
4. Page displays a option to resend activation code.
5. User click on it .
6. User Supplies Emial id and Activation Code is Sent.
7. User enters the activation code.
8. Page displays success message and redirects to login page.

* Post Condition:

1. Page displays a message ‘successfully activated and the login page appears

* Exceptions:

1. Login page re-appears with appropriate message if user enters invalid User ID or password.
2. Prompt box re-appears with appropriate message if user enters invalid Activation Code.
3. Login page re-appears with appropriate message if user fails to enter valid Activation Code within 5 minutes.

### E0001-003: Login with Active User ID ###

* Actor: User with Active User ID 

* Pre Condition:

1. User should have activated the User ID

* Input:

1. Email. 
2. Password.

* Sequence:
 
1. User opens login web page
2. User supplies his/her User ID and Password
3. User click on login button
4. User home page appears

* Post Condition:

1. User home page appears with name of the user displayed.

* Exceptions:

1. Login page re-appears with appropriate message if user enters invalid User ID or password.

### E0001-004 Reset Password ###

* Actor: User with Active User ID 
 
* Pre Condition:

1. User should have an active User ID with Online Exam Mongodb Database.

* Input:

1. User ID

* Sequence:

1. User opens login page.
2. User clicks on forgot password button.
3. User enters Email Id.
4. Page displays a Option to send activation code
5. Page prompts for Activation Code,new password , confirm password and clicks on "Reset Password"
6. Page displays success message and redirects to login page

* Post Condition:

1. User should be able to login with new credentials

* Exceptions:

1. Login page re-appears with appropriate message if user enters invalid User-ID.
2. Prompt box re-appears with appropriate message if user enters invalid activation code.

### E0001-005 Change Profile  ###

* Actor: User with Active User ID

* Pre Condition:

1. User should have logged into Online Exam Mongodb Database

* Input:

1. Name (optional)
2. Profile Pic with max size of 5KB in the formats of JPG/PNG(optional)
3. Phone Number (optional)

* Sequence:

1. User click on profile
2. Page displays the current profile of the user
3. User Clicks on Edit Profile Option.
4. Page displays a Form to Update Data.
5. User clicks on "Save" button
6. Page displays appropriate success message. 

* Post Condition:

1. User should be able to see updated profile

* Exceptions:

1. Displays error message in case an invalid password is entered
2. Displays error message in case invalid phone number is entered
3. Displays error message in case name is invalid
4. Displays error message in case invalid size/format for the profile pic

### E0001-006 Logout ###

* Actor: User with Active User ID

* Pre Condition:

1. User should have logged in to Online Exam Mongodb Database.

* Input:

1. None

* Sequence:

1. User click on Logout.
2. Page displays a message ‘successfully Logout ‘ and the login page appears.

* Post Condition:

1. Login screen appears
2. Back button or bookmarks fail to open any of the login-protected pages of the web app

* Exceptions:

1. Not Applicable

## Development ##

### Dependencies ###
1. Nodejs New Version
2. Visual Studio Code

### How to run ###
1. Move to the 'app' folder
```
cd app
```
2. Move to the 'frontend' folder
```
cd frontend
```
3. Install the dependencies
```
npm install
``` 
4. Run the app
```
npm run dev
```
5. Move to the 'backend' folder
```
cd backend
```
6. Install the dependencies
```
npm install
```
7. Run the app
```
npm start
```
8. verify localhost://5002
