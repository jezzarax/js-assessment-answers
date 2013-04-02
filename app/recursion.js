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
    usedChars: [],
    permArr: [],
    permute: function(arr) {
        var i, ch;
        for (i = 0; i < arr.length; i++) {
            ch = arr.splice(i, 1)[0];
            this.usedChars.push(ch);
            if (arr.length == 0) {
                this.permArr.push(this.usedChars.slice());
            }
            this.permute(arr);
            arr.splice(i, 0, ch);
            this.usedChars.pop();
        }
        return this.permArr;
    }
  };
});
