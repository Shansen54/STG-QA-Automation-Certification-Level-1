require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var until = webdriver.until;
var Key = webdriver.Key;

//For this challenge, look through the different ways to do assertions.  
//Then write a script that will go to copart.com, (Done)
//search for exotics and Done
//verify porsche is in the list of cars.  
//Use the hard assertion for this challenge.
describe("Challenge2 suite", function(){
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

it("Should run a search for exotics", async function() {
    var element = await driver.findElement(By.id("input-search"));
    return element.sendKeys("exotics" + Key.ENTER)
    });

it("Should wait and assert that exotics is in the title", async function() {
    this.timeout(5000);
    return driver.wait(until.titleContains("exotics"), 5000).then(function(title){}); {
        console.log(await driver.getTitle());
        assert.equal(title, "exotics For Auction at Copart - Salvage Cars For Sale");
        };
    });

it("Should assert that Porshe is on the page", async function() {
    var html = await driver.findElement(By.tagName("tbody")).getAttribute('innerHTML'); 
            return assert.include(html, "PORSCHE");  
    });
})