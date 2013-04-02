if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	return {
    		then: function(callback) {
    			callback(value);
    		}
    	};
    },

    manipulateRemoteData : function(url) {
    	var ref = new XMLHttpRequest();

		

    	ref.open("GET", url, false);
    	ref.send();

    	if (ref.readyState==4 && ref.status==200)
	    {
	    	
	    	return {
	    		then: function(callback) {
	    			var people = JSON.parse(ref.responseText).people;
	    			var rst = [];
	    			for(var item in people) {
	    				rst.push(people[item].name);
	    			}
	    			callback(rst.sort());
	    		}
	    	};	
	    }

    	
    }
  };
});
