"use strict";
function getInfo(obj) {
    if (typeof obj === 'string') {
        console.log(obj);
    }
    else if (typeof obj === 'number') {
        console.log(Math.pow(obj, 2));
    }
}
getInfo('123');
getInfo(100);
