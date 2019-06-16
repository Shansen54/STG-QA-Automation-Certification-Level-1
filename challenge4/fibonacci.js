module.exports = {
    fibonacci: fibonacci    
}

function fibonacci (number){
    var total = 0;
    if (number < 1){
        total = 0;
    }else {
        //calculate fib sequence.
    let arr = [0, 1];
     for (let i = 2; i < number + 1; i++){
        arr.push(arr[i - 2] + arr[i -1])
        }
    
    return arr[number] 
    }
    return total;
}