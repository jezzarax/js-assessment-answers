if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var rst = [];
    	
    	for(var item in data.files) {
    		if(typeof data.files[item] == "string" && (!dirName || dirName == data.dir))
    			rst.push(data.files[item]);
    		else {
    			if(!dirName || dirName == data.dir)
    				rst = this.listFiles(data.files[item]).concat(rst);
    			else 
    				rst = this.listFiles(data.files[item], dirName).concat(rst);
    		}
    	}

    	
    	return rst;
    },

    permute: function(arr) {

    }
  };
});
