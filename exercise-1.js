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
