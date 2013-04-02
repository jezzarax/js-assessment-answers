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
            return fn(str1, str2, str);
        };
    },

    useArguments : function() {
        var rst = .0;
        for(var item in arguments) {
            rst += arguments[item];
        }
        return rst;
    },

    callIt : function(fn) {
        var argsCount = fn.toString().split('(')[1].split(')')[0].split(',').length;
        if(argsCount == 2)
            return fn(arguments[1], arguments[2]);
        if(argsCount == 3)
            return fn(arguments[1], arguments[2], arguments[3]);
    },

    partialUsingArguments : function(fn) {
        var _a = arguments[1];
        var _b = arguments[2];
        var _c = arguments[3];
        if(arguments.length == 1) return function(a, b, c) { return fn(a, b, c);};
        if(arguments.length == 2) return function(b, c) { return fn(_a, b, c);};
        if(arguments.length == 3) return function(c) { return fn(_a, _b, c);};
        if(arguments.length == 4) return function() { return fn(_a, _b, _c);};
    },

    curryIt : function(fn) {
        var n  = fn.length - arguments.length - 1; //arguments still to come
        var sa = Array.prototype.slice.apply(arguments); // saved accumulator array
        function accumulator(moreArgs,sa,n) {
            var saPrev = sa.slice(0); // to reset
            var nPrev  = n; // to reset
            for(var i=0;i<moreArgs.length;i++,n--) {
                sa[sa.length] = moreArgs[i];
            }
            if ((n-moreArgs.length)<=0) {
                var res = fn.apply(null,sa);
                // reset vars, so curried function can be applied to new params.
                sa = saPrev;
                n  = nPrev;
                return res;
            } else {
                return function (){
                    // arguments are params, so closure bussiness is avoided.
                    return accumulator(arguments,sa.slice(0),n);
                }
            }
        }
        return accumulator([],sa,n);
    }
  };
});
