if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      var getValue;
      if (flag) {
        getValue = function() { return 'a'; }
      } else {
        getValue = function() { return 'b'; }
      }

      return getValue();
    },

    parseInt : function(num) {
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
        return val2 === val1;
    }
  };
});
