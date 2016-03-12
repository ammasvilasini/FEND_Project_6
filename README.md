# Feed Reader Testing Project

In this project we were given a web-based application that reads RSS feeds. The objective was to write a series of tests using Jasmine to test the existing features of the application. 


## How to Run the Project

* Clone this Repository or download the ZIP file
* Run index.html file in a web browser
* The upper part of the screen has the functionality of the app and the lower part displays the results of the tests. 
* Tests are run when the page loads.


## Tests Written:

* A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* A test that ensures the menu element is hidden by default.
* A test that ensures the menu changes visibility when the menu icon is clicked.
* A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
* A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


## Resources/References

* Jasmine Documentation - http://jasmine.github.io/
* Udacity Javascript Testing Course
* Udacity Discussion forums
* Udacity Office Hours
* https://discussions.udacity.com/t/the-menu-suite-for-hidden-menu-is-not-working/46867/3
* https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
* http://www.webdesignermag.co.uk/how-good-is-your-javscript-test-with-jasmine/
* http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html



