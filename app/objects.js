if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var rst = [];
    	var props = Object.getOwnPropertyNames(obj);
    	for (var key in props)
    		rst.push(props[key] + ": " + obj[props[key]]);
    	return rst;
    }
  };
});
