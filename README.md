# b7a11-toy-marketplace-client-side-sanad-bhowmik


## Website Name: Toylandia

## Features:

Navbar with the website logo, website name, and navigation links:

## Home
* All Toys
* My Toys (conditional based on login)
* Add A Toy (conditional based on login)
* Blogs
* User profile picture or Login button (conditional based on login status)
* Login and Registration systems:
* 
* Login page with email/password and Google Sign-in options
* Link to the registration page
* Relevant error messages for login and registration forms
* Home Page:

## Banner section showcasing a slider or meaningful content
* Gallery section with attractive pictures
* Shop by category section with a tab system:
* Each tab representing a category with sub-categories
* At least 3 sub-categories with minimum 2 toys each
* Toy information includes picture, name, price, rating, and view details button
* Non-logged-in users clicking the view details button are notified to log in
## Blogs Page:

* Answer questions on various topics, such as access tokens, SQL vs. NoSQL databases, Express.js, Nest.js, and MongoDB aggregate
* Create a blog section to present the answers
## All Toys Page:

* Displays all toys added by users in a tabular form
* Each row shows toy information:
* Seller name (if available)
* Toy name
* Sub-category
* Price
* Available quantity
* View details button
* Default limit of 20 results
* Search functionality based on toy name
* Non-logged-in users redirected to the login page when clicking view details
## Single Toy Details Page:

* Private route accessible after login
* Displays detailed information about a specific toy
* Information includes picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
* Optionally displayed in a modal
## Add A Toy Page:

* Private route accessible after login
* Form to add a new toy with fields:
* Picture URL
* Name
* Seller name (from logged-in user)
* Seller email (from logged-in user)
* Sub-category
* Price
* Rating
* Available quantity
* Detail description
## My Toys Page:

* Private route accessible after login
* Displays all toys added by the logged-in user in a tabular form
* Each row has update and delete buttons
* Update button allows users to modify toy information (price, available quantity, detail description)
* Delete button removes the toy with confirmation prompt
## Footer:

* Displays website logo, website name, copyright, contact information, social media links, and address
Visible on all pages except the 404 page
## 404 Page:

* Displays an interesting image or gif
* Includes a "Back to Home" button to redirect users to the home page
## Environment Variables:

* Firebase config keys and MongoDB credentials are stored securely using environment variables
## Git Commits and Readme:

* Minimum 18 meaningful Git commits on the client-side repository
* Minimum 8 meaningful commits on the server-side repository
* Create a detailed readme for the client-side repository, including project description and at least 5 bullet points
* Provide the client-side live link in the readme
## Route Handling:

* Protected/private routes retain the user's session on reload and do not redirect to the login page
## Responsive Design:

* Home page is mobile and desktop responsive
* Tablet responsiveness is optional
## AOS Package:

* Utilize the AOS (Animate On Scroll) package on the home page or other optional pages for smooth animations
## Sorting System:

* Implement sorting system on the My Toys page
* Sort toys in descending and ascending orders based on price
* Backend implementation using MongoDB sorting operation
* Design of the sorting system is up to the developer
## Dynamic Website Title:

* Change website title based on the active route, such as "Toylandia | About us" for the about route