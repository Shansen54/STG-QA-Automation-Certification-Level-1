require('chromedriver');
var webdriver = require('selenium-webdriver');

module.exports = {
    getDriver: getDriver
};

function getDriver (browser, rm, mobileType){ //browser options are 'chrome', 'firefox', 'edge', or 'internet explorer'

var builder = new webdriver.Builder();
builder.forBrowser('chrome');

if (rm != null){
    builder.usingServer(rm);
}
if (browser == null){
    browser = 'chrome';
}
browser = 'chrome';
builder.forBrowser(browser);

if  (browser == 'chrome' && mobileType != null){
    var caps = {
        browserName: 'chrome',
        chromeOptions:{
            mobileEmulation: {
                deviceName: mobileType //such as iPhone, or iPad
            }
        }
    };
    builder.withCapabilities(caps);
}
driver = builder.build();
console.log("Started the " + browser + " browser ");


if (mobileType == null){
    driver.manage().window().maximize();
}
return driver;
};