/* ДЗ - функции */
// 2.1
function returnFirstArgument(anyParameter) {
    return anyParameter;
}

// 2.2
function sumWithDefaults(a, b) {

    b = b || 100;

    return a + b;

}

// 2.3
function fn(name) {
    return `Привет, ${name}!`
}

function returnFnResult(fn) {
    return fn;
}
returnFnResult(fn('Антон'));

// 2.4

function returnCounter(number) {

    var innerNumber = number;

    return function F() {
        return innerNumber = innerNumber + 1;
    }

}

// 2.5
function returnArgumentsArray() {  

    var array = [];
    
    for (var i = 0; i < arguments.length; i = i + 1){
        array.push(arguments[i]);
    }

    return array;
}

// 2.6
function fn(...subArgs) {

    var sum = 0;

    for (var i = 0; i < subArgs.length; i = i + 1){
        sum = sum + subArgs[i];
    }  

    return sum;

}

function bindFunction(fn, ...mainArgs) {

    var argumentsArray = [...mainArgs];
    return fn.apply(this, argumentsArray);
  
}




/* ДЗ - работа с массивами и объектами */
// 3.1
function fn(array) {

    for (i = 0; i < array.length; i = i + 1) {
        console.log(`${i}: ${array[i]}, массив: [${array}]`);
    }

}

function forEach(array, fn) {

    return fn(array); 

}


// 3.2
function map(array, fn, thisArg) {
    
    var newArray = [];

    for (i = 0; i < array.length; i = i + 1){
        newArray.push(fn.call(thisArg, array[i], i, array));
    }

    return newArray;

}

// 3.3
function reduce(array, fn, initial) {
    
    if (initial) {

        previousValue = initial;

        for (i = 0; i < array.length; i = i + 1) {
            var currentItem = array[i];
            previousValue = fn.call(null, previousValue, currentItem, index, array);
        }

    } else {

        previousValue = array[0];

        for (i = 1; i < array.length; i = i + 1) {
            currentItem = array[i];
            previousValue = fn.call(null, previousValue, currentItem, index, array);
        }

    }

    return previousValue;

}

// 3.4
function upperProps(obj) {
    
    var array = [];
    var keys = Object.keys(obj);

    for (var key of keys) {
        array.push(key.toUpperCase());
    }

    return array;
}

// 3.5
function slice(array, from, to) {

    var newArray = [];

    if (from >= 0 && to > 0) {

        for (i = from; i < array.length - (array.length - (to)); i = i + 1) {
            newArray.push(array[i]);
        }

    } else if (from < 0 && to > 0) {

        for (i = (array.length - (-from)); i <  array.length - (array.length - (to)); i = i + 1) {
            newArray.push(array[i]);
        }

    } else if (from < 0) {

        for (i = (array.length - (-from)); i < array.length; i = i + 1) {
            newArray.push(array[i]);
        }

    } else if (from > array.length) {

        return newArray;

    } else if (!from) {

        for (i = 0;  i < array.length - (array.length - (to)); i = i + 1) {
            newArray.push(array[i]);
        }
    
    } else if (to < 0) {

        for (i = from; i < array.length - to; i = i + 1) {
            newArray.push(array[i]);
        } 

    } else if ((from >= 0 && !to) || to > array.length) {

        for (i = from; i < array.length; i = i + 1) {
            newArray.push(array[i]);
        }

    } else if (!from && !to) {

        for (i = 0; i < array.length; i = i + 1) {
            newArray.push(array[i]);
        }

    }

    return newArray;
}