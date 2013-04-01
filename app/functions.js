if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        fn();
        return arr[0] + ", " + arr[1] + arr[2];
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str1) {
            return str + ", " + str1;
        };
    },

    makeClosures : function(arr, fn) {
        var rst = [];
        var makeCls = function(num) {return function(){return fn(num);}};
        for(var i = 0; i < arr.length; i++) {
            rst.push(makeCls(arr[i]));
        };
        return rst;
    },

    partial : function(fn, str1, str2) {
        return function(str) {
            fn(str1, str2, str);
        };
    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
