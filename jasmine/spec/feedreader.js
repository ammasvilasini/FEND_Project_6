	/* feedreader.js
	*
	* This is the spec file that Jasmine will read and contains
	* all of the tests that will be run against your application. */

	/* We're placing all of our tests within the $() function,
	* since some of these tests may require DOM elements. We want
	* to ensure they don't run until the DOM is ready.
	*/
$(function() {

	/* RSS FEEDS TEST SUITE*/
	describe('RSS Feeds', function() {
	/* This is our first test - it tests to make sure that the
	* allFeeds variable has been defined and that it is not
	* empty.*/

		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


	/* This is a test that loops through each feed
	* in the allFeeds object and ensures it has a URL defined
	* and that the URL is not empty.
	*/
	describe('All feed URLs', function () {
		it('are defined and not empty', function () {
			function testURL(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url).not.toEqual("");
			}

			allFeeds.forEach(testURL);
		});
	});

	/* This is a test that loops through each feed
	* in the allFeeds object and ensures it has a name defined
	* and that the name is not empty.*/

	describe('All feed names', function () {
		it('are defined and not empty', function () {
			function testFeed(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name).not.toEqual("");
			}

			allFeeds.forEach(testFeed);
		});
	});
	});

	/* THE MENU TEST SUITE */
	describe('The menu', function () {
	/* This is a test that ensures the menu element is
	* hidden by default.*/

		it('is hidden by default', function () {
			expect($('body').hasClass("menu-hidden")).toBe(true);
			});

	/* This is a test that ensures the menu changes
	* visibility when the menu icon is clicked. This test
	* has two expectations: does the menu display when
	* clicked and does it hide when clicked again.*/

		it('changes visibility when the menu item is clicked', function () {
			$(".menu-icon-link").click();
			expect($('body').hasClass("menu-hidden")).toBe(false);

			$(".menu-icon-link").click();
			expect($('body').hasClass("menu-hidden")).toBe(true);
		});

	});
	/* INITIAL ENTRIES TEST SUITE */
	describe('Initial Entries', function () {
		beforeEach(function (done) {
			loadFeed(0, done);
		});

	/* This is a test that ensures when the loadFeed
	* function is called and completes its work, there is at least
	* a single .entry element within the .feed container.*/

		it('should have at least one entry in feed container', function () {
			expect($('.feed').is(':empty')).toBe(false);
		});

	});
	/* NEW FEED SELECTION TEST SUITE */
	describe('New Feed Selection', function(done) {
		var previousFeed;
		beforeEach(function (done) {
			loadFeed(1,function(){
				previousFeed = $('.feed').html();
				done();
			});
		});
	/* This a test that ensures when a new feed is loaded
	* by the loadFeed function that the content actually changes.
	* Remember, loadFeed() is asynchronous.
	*/
		it('changes the content of the feed', function (done) {
			loadFeed(2,function(){
				expect($('.feed').html()).not.toEqual(previousFeed);
				done();
			})
		});
	});
});
