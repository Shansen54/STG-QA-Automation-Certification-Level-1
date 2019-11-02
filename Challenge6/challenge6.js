/* eslint-disable no-undef */
require('chromedriver');
var webdriver = require('../node_modules/selenium-webdriver');
var assert = require("../node_modules/chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var screenShot = require('../common/takeScreenshot');
const driverManager = require('../common/driver');

/*For this challenge, go to copart site, (Done) search for nissan, (Done) and then for the model in the left side filter option, 
search for “skyline”.  Now look for a check box for a Skyline.  This is a rare car that might or might not be in the 
list for models.  When the link does not exist to click on, your script will throw an exception.  Catch the exception 
and take a screenshot of the page of what it looks like.  */

describe("Challenge6 suite", function(){
    this.timeout(30000);
    var driver;

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
  
 it("Should run a search for nissan and set dropdown to 100", async() => {
     var searchbox = driver.findElement(By.id('input-search'))
     searchbox.sendKeys('nissan' + Key.ENTER)
     assert (await driver.wait(until.titleContains('nissan'), 30000));
     const dropDown = await driver.findElement(By.name('serverSideDataTable_length'));
        await dropDown.findElement(By.xpath('//option[. = "100"]')).click();
        return await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing'), 20000)));
 });
 
 it("Should look in serverSideDataTable to find Nissan", async function() {
     await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]//tbody'))))
     var htmltext = await driver.findElement(By.id('serverSideDataTable')).getAttribute('innerHTML');
     return assert.include(htmltext, 'NISSAN');
 });
 
 it("Should find all of the Nissan models", async function(){
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//*[@class='list-group']"), 20000)));
    let filterArray = await driver.findElements(By.xpath("//*[@id='filters-collapse-1']//li//a[1]"));
    for(let i=0; i<filterArray.length; i++){
        if(await filterArray[i].getText() === "Model"){
            await filterArray[i].click();
            break;
        }
    }
 })
 it("Should search the Model filter and enter Skyline to search", async function() {
    var filterBox = await driver.findElement(By.xpath("//*[@id='collapseinside4']/form/div/input"));
    filterBox.sendKeys("skyline");
        try {
         var filterCheckbox = await driver.findElement(By.xpath("//*[@id='lot_model_descSKYLINE']"));
         filterCheckbox.click();
         await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing'), 20000)));
     }
 
     catch (e){
        let filterCheckbox = await driver.findElement(By.xpath("//*[@id='lot_model_descSKYLINEGTR']"));
        filterCheckbox.click();
        await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing'), 20000)));
        screenShot.takeScreen();
     }
 
     //finally{
     //    console.log("hi there");
     //}
     //return "";
 })
 });