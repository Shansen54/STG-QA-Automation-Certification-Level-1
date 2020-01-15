const fs = require('fs')
const copartSearch = require('../common/copartSearcher')
var assert = require("chai").assert;

const searches = [
    "toyota camry",
    "nissan skyline",
    "porsche cayenne",
    "chevy avalanche",
    "honda element",
    "mater",
    "blue beetle",
    "semi cab",
    "red muscle car",
    "smart car"
]


describe("Searching via API", () => {
    it("Looks for stuff and logs number found", async () => {
        await Promise.all(searches.map(async (search) => {
            const results = await copartSearch.getResultCount(search);

            var logString = `*********\n${new Date().toUTCString()}\nSearched: ${search}\nFound: ${results.resultCount} results\n`
            fs.appendFile('results.log', logString, err => {
                if (err)
                    console.log(`search ${search}: `, err)
            })
            assert.equal(results.statusCode, 200, `Response code on the search should be 200 for '${search}'`)
            assert.equal(results.returnCode, "Success", `Copart response should be 'Success' for '${search}'`)
        }))
    })
})