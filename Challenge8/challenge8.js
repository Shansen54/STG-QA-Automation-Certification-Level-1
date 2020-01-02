/* Doing a POST request for a search endpoint for Challenge 8. */
var request = require('request');

// Setting the Header here //

var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded',
    'Authorization':    'Bearer token'
}

// Configuring the request here
var options = {
    url: 'https://www.copart.com/public/lots/search',
    method: 'POST',
    headers: headers,
    form: {'query1': 'toyota camry'}
}


describe("Challenge8 suite", function(){
    this.timeout(60000);

    it("Should search for multiple car makes and models.", function() {
        //Starting the requests
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200){
            console.log(body);
            }
        }
    )});
});