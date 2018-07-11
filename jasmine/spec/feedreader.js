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

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has URL link', function () {
            allFeeds.forEach(function (entry) {
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });
        });


        it('has Name', function () {
            allFeeds.forEach(function (entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function () {
        it('is hidden by default', function () {
            expect(document.getElementsByTagName("body")[0]).toHaveClass('menu-hidden');
        });

        it('toggles properly', function () {
            $('body').toggleClass('menu-hidden'); //Click to un-hide
            expect(document.getElementsByTagName("body")[0]).not.toHaveClass('menu-hidden');
            $('body').toggleClass('menu-hidden'); //Click to Hide
            expect(document.getElementsByTagName("body")[0]).toHaveClass('menu-hidden');
        });
    });

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('are loaded completely', function () {
            console.log("My Feed Length = " + $('.feed').length);
            expect($('.feed').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function () {

        var myFeedHTML1, myFeedHTML2
        beforeEach(function (done) {
            loadFeed(0, function () {
                myFeedHTML1 = $('.feed').html();
                console.log("myFeedHTML1 = " + myFeedHTML1);
                done();
            });
        });

        beforeEach(function (done) {
            loadFeed(2, function () {
                myFeedHTML2 = $('.feed').html();
                console.log("myFeedHTML2 = " + myFeedHTML2);
                done();
            });
        });

        it('has content that actually changes', function () {
            expect(myFeedHTML1).not.toBe(myFeedHTML2);
        });
    });
}());