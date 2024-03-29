var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['foo', 'bar'],
function   (foo,   bar) {
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.
});


// (function(exports){

//     // your code goes here

//    exports.test = function(){
//         return 'hello world';
//     };

// })(typeof exports === 'undefined'? this['mymodule']={}: exports);