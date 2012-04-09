
function getBungalowApi(version) {
	return {
		require: function(path) {
			var c = new XMLHttpRequest();
			c.open("GET", path+".js", false);
			c.send(null);
		
			var pc = "(new (function() { var exports = {};\n" + c.responseText +"; this._exports = exports;})())._exports";
			console.log(pc);
			return eval(pc);
			
		},
		core: {}
	};
}