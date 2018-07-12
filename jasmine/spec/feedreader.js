/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function () {

    describe('RSS Feeds', function () {

        //Make sure allFeeds exists and is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Make sure it has a URL Link
        it('has URL link', function () {
            allFeeds.forEach(function (entry) {
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });
        });

        //Make sure it has name
        it('has Name', function () {
            allFeeds.forEach(function (entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function () {

        //Checks that the menu is hidden by default
        it('is hidden by default', function () {
            expect(document.getElementsByTagName("body")[0]).toHaveClass('menu-hidden');
        });

        //Makes sure that you can click to open and close the menu
        it('supports click to open and close', function () {
            $('.menu-icon-link').click();
            expect(document.getElementsByTagName("body")[0]).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click()
            expect(document.getElementsByTagName("body")[0]).toHaveClass('menu-hidden');
        });
    });

    describe('Initial Entries', function () {

        //Call loadFeed Asynchronously 
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        //Makes sure there is at least a single entry in the feed container after loadFeed is called
        it('are loaded completely', function () {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function () {

        let myFeedHTML1, myFeedHTML2

        //Load in the list from one of the menu items asynchronously 
        beforeEach(function (done) {
            loadFeed(0, function () {
                myFeedHTML1 = $('.feed').html();
                done();
            });
        });

        //Load in the list from a different one of the menu items asynchronously 
        beforeEach(function (done) {
            loadFeed(2, function () {
                myFeedHTML2 = $('.feed').html();
                done();
            });
        });

        //Compares the results to see if they are different
        it('has content that actually changes', function () {
            expect(myFeedHTML1).not.toBe(myFeedHTML2);
        });
    });
}());