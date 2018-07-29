// 1
function isAllTrue(array, fn) {  

    if ((array === []) || (array instanceof Array === false)) {
        throw new Error("empty array");
    } else if (typeof fn !== 'function') {
        throw new Error("fn is not a function");
    }  

    for (var i = 0; i < array.length; i++) {
        if (!fn(array[i])) return false;
    }
    return true;

}

// 2
function isSomeTrue(array, fn) {  

    if ((array === []) || (array instanceof Array === false)) {
        throw new Error("empty array");
    } else if (typeof fn !== 'function') {
        throw new Error("fn is not a function");
    }  

    for (var i = 0; i < array.length; i++) {
        if (fn(array[i])) return true;
    }
    return false;

}

// 3
function returnBadArguments(fn,...rest) {

    if (typeof fn !== 'function') {
        throw new Error("fn is not a function");
        }  
    
    try {
        
        var errorArray = [];

        for (var i = 0; i < rest.length; i = i + 1) {
            var nextArg = rest[i];
            var result = fn(nextArg);
        }

    }

    catch (error) {

        for (var e in error) {
            errorArray.push(error.name);
        }

        return errorArray;
    }

}

// 4
function calculator (number, ...rest){

    if (typeof number !== 'number') {
        throw new Error("number is not a number");
    }

    var number = number || 0;
    var sumTotal = number;
    var difTotal = number;
    var divTotal = number;
    var mulTotal = number;
    
    for(var i = 0; i < rest.length; i = i + 1) {

        var arg = rest[i];

        if (arg === 0) {
            throw new Error("division by 0");
        } 

        sumTotal = sumTotal + arg;
        difTotal = difTotal - arg;
        divTotal = divTotal / arg;
        mulTotal = mulTotal * arg;

    }

    var sumMethod = function () {
        return sumTotal
    }

    var difMethod = function () {
        return difTotal
    }

    var divMethod = function () {
        return Math.round(divTotal * 1000) / 1000;
    }

    var mulMethod = function () {
        return mulTotal
    }


    var calcMethods = {
        "sum": sumMethod(),
        "dif": difMethod(),
        "div": divMethod(),
        "mul": mulMethod()
    }

    return calcMethods

}