const axios = require('axios')
const qs = require('querystring')

var copartSearcher = {
    /**
     * Submits a search, and handles results according to callback
     * 
     * @param {string} searchTerm the search term to submit
     * @param {function} callback handles search results
     */
    doSearch: function (searchTerm, callback) {
        const requestBody = { query: searchTerm }
        const config = { 'Content-Type': 'application/x-www-form-urlencoded' }
        return axios.post("https://www.copart.com/public/lots/search", qs.stringify(requestBody), config)
            .then(response => callback(response))
            .catch(err => {
                console.log(err)
            })
    },
    /**
     * Searches copart's API, returns a count of results, the API response code and code returned by copart
     * 
     * @param {string} searchTerm 
     * 
     * @returns {object} {resultCount: number, statusCode: http response, returnCode: copart defined}
     */
    getResultCount: function (searchTerm) {
        return this.doSearch(searchTerm, function (response) {
            const results = {
                resultCount: response.data.data.query.size,
                statusCode: response.status,
                returnCode: response.data.returnCodeDesc
            }
            return results;
        })
    },
    /**
     * Searches copart's API, returns an array of the lots in the response, the response code, and code defined by copart
     * 
     * @param {string} searchTerm 
     * 
     * @returns {object} {statusCode: http response, returnCode: copart defined, lots: [array of lots in results]}
     */
    getLots: function (searchTerm) {
        return this.doSearch(searchTerm, function (response) {
            const results = {
                statusCode: response.status,
                returnCode: response.data.returnCodeDesc,
                lots: response.data.data.results.content
            }
            return results
        })
    }
}

module.exports = copartSearcher