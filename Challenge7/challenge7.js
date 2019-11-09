/* eslint-disable no-undef */
require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
//var Key = webdriver.Key;
var until = webdriver.until;
//var screenShot = require('../common/takeScreenshot');
let combinedArray = [];
//let foundMake = [];
const driverManager = require('../common/driver');

/*For this challenge, take a look at https://www.copart.com main page.  - Done.
Hint: xpath is easiest.  ***Note, you did part of this in challenge 3. ***  */

describe("Challenge7 suite", function(){
    this.timeout(60000);

    before(async function () {
        // initializing driver
        return driver = await driverManager.getDriver();
     });
 
     after(function () {
         return driver.quit();
     });
 
 it("Should open www.copart.com", async function() {
         return driver.get("https://www.copart.com");
 });

 /* Create a 2 dimensional array that stores all the  popular search 
 values displayed on the page along w/ the URL for that link.  Done - combinedArray */

it('Should collect the name and URL of popular searched for products and print them out', async function() {
    let urlArray = [];
    let carMakeArray = [];
    let popularSearchesArray = await driver.findElements(By.xpath('//div[@ng-if="popularSearches"]//a'));

    for (let i=0; i < popularSearchesArray.length; i++){
        carMakeArray.push(await popularSearchesArray[i].getText());
        urlArray.push(await popularSearchesArray[i].getAttribute('href'));
        combinedArray.push([carMakeArray[i], urlArray[i]]);
    }
    console.log(combinedArray);
});

/* Once you have this array, you can verify all the elements in the array navigates to the correct page.  
Don’t forget to verify some piece of data on the page.  
*/

it('Should open each url and check for the model or makes name', async function() {
    for(let i=0; i < combinedArray.length; i++){
        var upperModelName = (combinedArray[i][0]);
//        console.log(upperModelName);
//        var lowerModelName = upperModelName.toLowerCase();
//        console.log(lowerModelName);
        await driver.get(combinedArray[i][1]);
        assert (await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing'), 30000))));
            if (i < 10) { var searchModelResult = await driver.findElement(By.css("tbody > tr:first-child > td:nth-of-type(6) > span")).getText();
            console.log("Found " + searchModelResult + " on " + (combinedArray[i][1]));
            assert.include(searchModelResult, upperModelName);
                        }
            else {
            var searchResult = await driver.findElement(By.css("tbody > tr:first-child > td:nth-of-type(5) > span")).getText();
            console.log("Found " + searchResult + " on " + (combinedArray[i][1]));
            assert.include(searchResult, upperModelName);
                }
}
});
});