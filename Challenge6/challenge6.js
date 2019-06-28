require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;

/*For this challenge, go to copart site, (Done) search for nissan, (Done) and then for the model in the left side filter option, 
search for “skyline”.  Now look for a check box for a Skyline.  This is a rare car that might or might not be in the 
list for models.  When the link does not exist to click on, your script will throw an exception.  Catch the exception 
and take a screenshot of the page of what it looks like.  */

describe("Challenge6 suite", function(){
    this.timeout(30000);
    var driver;

    before(function () {
       // initializing chrome driver
       driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
       driver.manage().window().maximize();
    });

    after(function () {
        return driver.quit();
    });

it("Should open www.copart.com", function() {
        return driver.get("https://www.copart.com");
});
 
it("Should run a search for nissan", async() => {
    var searchbox = driver.findElement(By.id('input-search'))
    searchbox.sendKeys('nissan' + Key.ENTER)
    assert (await driver.wait(until.titleContains('nissan'), 30000));
});

/*it("Should change the displayed entries to 100", async() => {
    var numberEntries = await driver.findElement(By.xpath('//select[@name="serverSideDataTable_length"]'))
    await numberEntries.click()
    await numberEntries.sendKeys("100")
    numberEntries.click();
    return driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing',1000))))
});

it("Should gather the models of porsches listed", async() => {
    var modelList = await driver.findElements(By.xpath('//span[@data-uname="lotsearchLotmodel"]'));
    var models_count = [];
    console.log(modelList.length);
    
    for (var i =0; i < modelList.length; i++){
        var model = await modelList[i].getText();
        models_count.push(model);
    }
    models_count.sort();
    var thisModel = null;
    var count = 0;
    for (var i = 1; i < models_count.length; i++) {
        if (models_count[i] != thisModel){
            if (count > 0){
                console.log("There are " + count + " " + thisModel + "'s in this list of 100 entries");
            }
            thisModel = models_count[i];
            count = 1;
        }
        else{
            count++;
        }
    }
    if (count > 0 ){
        console.log("There are " + count + " " + thisModel + "'s in this list of 100 entries");
    }
    return "";
});

it("Should gather the types of damage listed and their frequency", async() => {
    var damageTypesList = await driver.findElements(By.xpath('//span[@data-uname="lotsearchLotdamagedescription"]'));
    var types_count = [];
    console.log(damageTypesList.length);
    
    for (var i =0; i < damageTypesList.length; i++){
        var damageType = await damageTypesList[i].getText();
        types_count.push(damageType);
        switch(damageType) {
            case "FRONT END":
                frontend = frontend+1;
                break;
            case "REAR END":
                rearend = rearend+1;
                break;
            case "MINOR DENT/SCRATCHES":
                mindent = mindent+1;
                break;
            case 'SIDE':
                side = side+1;
                break;
            case "WATER/FLOOD":
                water = water+1;
                break;
            case "ALL OVER":
            case "BURN - ENGINE":
            case "ROLLOVER":
            case "MECHANICAL":
            case "UNDERCARRIAGE":
            case "VANDALISM":
            case "FRAME DAMAGE":
            case "TOP/ROOF":
            default:
                misc = misc+1;
        }
    }
    console.log("Rear End: " + rearend + ", Front End: " + frontend + " Minor Dents/Scratches: " + mindent + 
        ", Side: " + side + ", Water/Flood: " + water + ", and Misc: " + misc);
    }
);*/
});
