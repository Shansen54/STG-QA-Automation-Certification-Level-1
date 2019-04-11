require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;

/*For this challenge, I will go to copart and print a list of all the “Popular Items” 
of vehicle Make/Models on the home page and the URL/href for each type.  
This list can dynamically change but using a loop will make sure that everything 
will be displayed regardless of the list size.*/

describe("Challenge3 suite", function(){
    this.timeout(30000);
    var driver;
    before(function () {
       // initializing chrome driver
       driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
    });

    after(function () {
        return driver.quit();
    });

it("I am opening www.copart.com", function() {
        return driver.get("https://www.copart.com");
    });
 
it("Assert the title is 'Auto Auction - Copart USA - Salvage Cars For Sale'", function() {
        return driver.getTitle().then(function(title) {
            assert.equal(title, "Auto Auction - Copart USA - Salvage Cars For Sale");
        });
    });

it("Should find the list of popular vehicles", async function() {
    var vehicles = await driver.findElements({css:'#tabTrending > div > div > div > ul > li > a'});
    for(let model of vehicles) {
        car = await model.getText();
        name = await model.getAttribute("href");
        console.log(car + " - " + name);
    }
    });
})