// 1
function addListener(eventName, target, fn) {
    target.addEventListener(eventName, fn);
}


// 2
function removeListener(eventName, target, fn) {
    target.removeEventListener(eventName, fn);    
}

// 3
function skipDefault(eventName, target) {

    target.eventName = function(event) {
        event.preventDefault();
    }

}

// 4
function emulateClick(target) {

    target.click();

    return fn();

}

// 5
function delegate(target, fn) {

    target.onclick = function () {

        while (target != table) {
            if (target.tagName == 'button') {
              return fn();
            }
            target = target.parentNode;
        }

    }

}

// 6
function once(target, fn) {

    target.addEventListener('click', fn, {
        once: true
    });

}
