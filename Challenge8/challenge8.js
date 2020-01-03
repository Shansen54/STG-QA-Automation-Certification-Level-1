/* eslint-disable no-undef */
/* Doing a POST request for a search endpoint for Challenge 8. */
var request = require('request');

// Setting the Header info here //

var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/json',
    'Authorization':    'Bearer token'
}

// Configuring the request options here
var options = {
    url: 'https://www.copart.com/public/lots/search',
    method: 'POST',
    headers: headers,
    form: {'query': 'camry'}
}


describe("Challenge8 suite", function(){
    this.timeout(60000);

    it("Should search for specified car makes and models.", async function() {
        //Starting the requests
        var listToSearch = ["honda", "chevy", "GMC", "ford", "accord", "charger"];
        for (var i=0; i < listToSearch.length; i++){
            options.form.query = listToSearch[i];
            console.log(options.form.query); // checks for the car to be searched. This works.
            request(options, function (error, response, body) {
                if (!error && response.statusCode == 200){
                var results = response.toJSON(body);
                console.log(results); //This does not seem to output any usable results, including the query results. Please point me to an article that can explain what I am missing.
                //console.log(options.form.query); // checks for the car to be searched and it only returns the final one. Why?
                //console.log(body);
                //console.log('statusCode:', response && response.statusCode);
                }
                else {
                    console.log('error:', error);
                }
            })
    }
    });
});