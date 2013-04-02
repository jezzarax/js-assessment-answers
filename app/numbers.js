if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return ((num >> (bit - 1))&0x1);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var rst = num.toString(2);
        return Array(9-rst.length).join("0") + rst;
    },

    multiply: function(a, b) {
        return parseFloat((parseFloat(a) * b).toFixed(6));
    }
  };
});

