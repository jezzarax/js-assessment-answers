if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var rst = 0;
        for(var i in arr)
            rst += arr[i];
        return rst;
    },

    remove : function(arr, item) {
        while(arr.indexOf(item) != -1)
            arr.splice(arr.indexOf(item), 1);
        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
        while(arr.indexOf(item) != -1)
            arr.splice(arr.indexOf(item), 1);
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var cnt = 0;
        for(var i in arr) {

            if (arr[i] == item) cnt++;
        }
        return cnt;
    },

    duplicates : function(arr) {
        var rst = [];
        arr = arr.sort();
        for(var i = 0; i<arr.length - 1; i++) {
            if(arr[i] == arr[i+1] && rst.indexOf(arr[i]) == -1)
                rst.push(arr[i]);
        }
        return rst;
    },

    square : function(arr) {
        var rst = [];
        for(var i in arr) 
            rst.push(arr[i]*arr[i]);
        return rst;
    },

    findAllOccurrences : function(arr, target) {
        var rst = [];
        for(var i in arr) 
            if(target == arr[i])
                rst.push(i);
        return rst;
    }
  };
});
