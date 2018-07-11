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

        //Addresses Rubric Step #19 to make sure allFeeds exists and is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Addresses Rubric Step #8
        it('has URL link', function () {
            allFeeds.forEach(function (entry) {
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });
        });

        //Addresses Rubric Step #9
        it('has Name', function () {
            allFeeds.forEach(function (entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });
        });
    });

    //Addresses Rubric Step #10
    describe('The menu', function () {
        
        //Addresses Rubric Step #11
        it('is hidden by default', function () {
            expect(document.getElementsByTagName("body")[0]).toHaveClass('menu-hidden');
        });

        //Addresses Rubric Step #12
        it('toggles properly', function () {
            $('body').toggleClass('menu-hidden'); //Click to un-hide
            expect(document.getElementsByTagName("body")[0]).not.toHaveClass('menu-hidden');
            $('body').toggleClass('menu-hidden'); //Click to Hide
            expect(document.getElementsByTagName("body")[0]).toHaveClass('menu-hidden');
        });
    });

    //Addresses Rubric Step #13
    describe('Initial Entries', function () {

        //Addresses Rubric Step #14 by loading asynchronously 
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        //Addresses Rubric Step #14
        it('are loaded completely', function () {
            expect($('.feed').length).not.toBe(0);
        });
    });

    //Addresses Rubric Step #15
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

        //Addresses Rubric Step #16 by comparing the two results
        it('has content that actually changes', function () {
            expect(myFeedHTML1).not.toBe(myFeedHTML2);
        });
    });
}());