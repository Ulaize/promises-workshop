var Promise = require('bluebird');

function delay(milliseconds){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,milliseconds);
    });
    
}

delay(1000).then(
    function(value) {
        console.log("ONE");
        return 1000;
    }
).then(delay).then(
    function(value) {
        console.log("TWO");
        return 1000;
    }
).then(delay).then(
    function(value) {
        console.log("THREE");
        return 1000;
    }
).then(delay).then(
    function(value) {
        console.log("...LIFTOFF!");
});

//Create a function called getFirstChar that takes a string, and returns a Promise 
//that will be resolved with the first character of the passed string, after 500 
//milliseconds. You may use the delay function from the previous exercise.

var Promise = require('bluebird');

function getFirstChar(string){
    return delay(500).then(function(){
        return string.charAt(0);
        
    });
    
}

//Create a function called getLastChar that takes a string, and returns a Promise 
//that will be resolved with the last character of the passed string, after 500 milliseconds. 
//You may use the delay function from the previous exercise.


function getLastChar(string){
    return delay(500).then(function(){
       return string.charAt(string.length-1);
    });
    
}

//Create a function called getFirstAndLastCharSeq that takes a string, and returns
//a Promise that will be resolved with the first and last character of the passed 
//string. This function should use getFirstChar and getLastChar in sequence.



function getFirstAndLastCharSeq(aString) {
    var firstChar;
    return getFirstChar(aString).then(
        function(resolve) {
            firstChar=resolve;
            return getLastChar(aString);
        }
    ).then(
        function(lastChar) {
            return firstChar + lastChar;
        }
    );
}












getFirstAndLastCharSeq().then(console.log)


function getFirstAndLastCharParallel(aString) {
    var firstCharPromise = getFirstChar(aString);
    var lastCharPromise = getLastChar(aString);
    return Promise.join(firstCharPromise, lastCharPromise, function(firstChar, lastChar) {
        return firstChar + lastChar;
    });
}

getFirstAndLastCharParallel("hello").then(
    function(firstLast) {
        console.log(firstLast);
    }
);