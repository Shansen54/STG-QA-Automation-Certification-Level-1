require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert

//Getting to GIT and now in the asserting branch - I know this is copy of the first challenge.
describe("challenge1 suite", function(){
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
 
 it("The title is 'Auto Auction - Copart USA - Salvage Cars For Sale'", function() {
        return driver.getTitle().then(function(title) {
            assert.equal(title, "Auto Auction - Copart USA - Salvage Cars For Sale");
        });
    });
 
})