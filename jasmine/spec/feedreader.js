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

    describe('RSS Feeds',  () => {

        //Make sure allFeeds exists and is not empty
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Make sure it has a URL Link
        it('has URL link', () => {
            allFeeds.forEach((entry) => {
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });
        });

        //Make sure it has name
        it('has Name', () => {
            allFeeds.forEach(function (entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', () => {

        //Checks that the menu is hidden by default
        it('is hidden by default', () => {
            expect(document.getElementsByTagName("body")[0]).toHaveClass('menu-hidden');
        });

        //Makes sure that you can click to open and close the menu
        it('supports click to open and close', () => {
            $('.menu-icon-link').click();
            expect(document.getElementsByTagName("body")[0]).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click()
            expect(document.getElementsByTagName("body")[0]).toHaveClass('menu-hidden');
        });
    });

    describe('Initial Entries', () => {

        //Call loadFeed Asynchronously 
        beforeEach(function (done) {
            loadFeed(0, () => {
                done();
            });
        });

        //Makes sure there is at least a single entry in the feed container after loadFeed is called
        it('are loaded completely', () => {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', () => {

        let myFeedHTML1, myFeedHTML2

        //Load in the list from one of the menu items asynchronously 
        beforeEach(function (done) {
            loadFeed(0, () => {
                myFeedHTML1 = $('.feed').html();
                done();
            });
        });

        //Load in the list from a different one of the menu items asynchronously 
        beforeEach(function (done) {
            loadFeed(2, () => {
                myFeedHTML2 = $('.feed').html();
                done();
            });
        });

        //Compares the results to see if they are different
        it('has content that actually changes', () => {
            expect(myFeedHTML1).not.toBe(myFeedHTML2);
        });
    });
}());