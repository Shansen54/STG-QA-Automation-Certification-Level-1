require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert

//Getting to GIT for real
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

it("I open the google website", function() {
        return driver.get("http://www.google.com");
    });
 
 it("The title is 'Google'", function() {
        return driver.getTitle().then(function(title) {
            assert.equal(title, "Google");
        });
    });
 
})