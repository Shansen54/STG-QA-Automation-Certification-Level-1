/* eslint-disable no-undef */
require('chromedriver');
var webdriver = require('selenium-webdriver');
//var assert = require("chai").assert;
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
    this.timeout(30000);

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

it('Should collect the name and URL of popular products and print them out', async function() {
    let urlArray = [];
    let carMakeArray = [];
    let popularSearchesArray = await driver.findElements(By.xpath('//div[@ng-if="popularSearches"]//a'));

    for (let i=0; i < popularSearchesArray.length; i++){
        console.log(await popularSearchesArray[i].getText() + " - " + await popularSearchesArray[i].getAttribute("href"));
        carMakeArray.push(await popularSearchesArray[i].getText());
        urlArray.push(await popularSearchesArray[i].getAttribute('href'));
        combinedArray.push([carMakeArray[i], urlArray[i]]);
    }
    console.log(combinedArray);
});

/* Once you have this array, you can verify all the elements in the array navigates to the correct page.  
Don’t forget to verify some piece of data on the page.  
To get started, inspect the code and notice the section of the page is built using angular.  There is no static id 
or element class that identifies each element in this section.  
Everything is generic.  The only way to build a function/object for this section is to loop through each element.

** Your final code would look like this:
Function NavigateTo(URL, validationString){
	//put code in there and verify the page you navigate to has the validationString value somewhere.  
	//If the value exists, return true.  Otherwise, return false.  
}

** Your test would look like this:

It (“should verify these urls using the displayed text for each URL as validation”){
NavigateTo(URL, “some text”);
NavigateTo(URL, “some text2”);
} 

*/
it('Should open each url and check for the makes name', async function() {
    for(let i=0; i < combinedArray.length; i++){
        console.log(combinedArray[i][0]);
        await driver.get(combinedArray[i][1]);
        await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing'), 20000)));
        foundMake = await driver.findElement(By.xpath("//*[@id='serverSideDataTable']/tbody")).getText();
        console.log(foundMake[i]);
        //assert ((foundMake[i]) (combinedArray[i][0]))
//        {
//           console.log(combinedArray[i][0] + " loaded properly")
//        }   else{
//              console.log(combinedArray[i][0] + ' did not load properly')
//        }
    }
});


});