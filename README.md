# Project Overview

This project is a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite. They have left the company, and it is my job to complete the testing suite.

## How to run this Project

You can access this project by going :
[here](https://davidjenness.github.io/nanodegree-project4/)

Alternatively, you can do the following:
1. One the [Github Page for the Project](https://github.com/DavidJenness/nanodegree-project4) you can click on the "Clone or Download" button and choose "Download Zip"
2. Unzip this file in the directory where you would like to work on it
3. Use Visual Studio Code to open that directory
4. The main files you will want to experiment with will be:
* index.html - The main HTML of the project
* js/app.js - The logic that drives the project
* jasmine/spec/feedreader.js - This is where you will see all the Jasmine unit tests


You'll see the most interesting items in the feedreader.js file. 

You'll see that all of the tests will pass. 
None of the tests are dependent on the results of any other tests.
Callbacks are used when testing the feed in order for the API call to have time to finish.

## Expected Output
You should see the following test results at the bottom of the page:

#### RSS Feeds
   has Name
   has URL link
   are defined
#### Initial Entries
   are loaded completely
#### The menu
   is hidden by default
   supports click to open and close
#### New Feed Selection
   has content that actually changes   

## Lessons Learned
One other interesting thing I learned was to always keep the CDN of your libraries up to date. As part of this project I updated the following dependencies.

* JQuery to 3.3.1
* Handlebars JS to 4.0.11
* Google JS API
* Jasmine to 3.1.0