if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /[\d]/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([a-zA-Z])\1/.test(str);
    },

    endsWithVowel : function(str) {
        return /[aeiou]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
        return /[0-9]{3}/.exec(str) == null ? false : /[0-9]{3}/.exec(str)[0];
    },

    matchesPattern : function(str) {
        return /^[\d]{3}-[\d]{3}-[\d]{4}$/.test(str);
    },
    isUSD : function(str) {
        console.log(str);
        return /^\$(\d{1,3})(\,[0-9]{3}?)*(\.\d\d){0,1}$/.test(str);
    }
  };
});
