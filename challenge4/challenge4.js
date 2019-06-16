/*For this challenge, I will get a fibonacci number and list the written out words of that
number.*/

const fib = require ("./fibonacci")
const ston = require ("./numberToString")
var order = [];

describe("Challenge4 suite", function(){

    it("Should return the fibonacci number and the words of the number", function() {
        //order is the nth order in the fibonacci sequence
        order = [1, 4, 9, 13, 17, 20, 26, 31];
        for (var i=0; i < 8; i++) 
        {
            console.log("The (" + order[i] + ") number in the fibonacci sequence is " + fib.fibonacci(order[i]) + " and its words are " + ston.toWords(fib.fibonacci(order[i])) );
        }
    });
 
});