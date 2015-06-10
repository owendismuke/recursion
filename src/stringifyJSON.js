// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result;
	if (typeof(obj) === "string") { return '"' + obj + '"'; }
	if (!obj || typeof(obj) !== "object") { return  obj += ''; }
	if (Array.isArray(obj)) {
		result = '[';
		for (var i = 0; i < obj.length; i++){
			result += stringifyJSON(obj[i]);
			if (i < obj.length-1) { result += ','; }
		}
		return result += ']';
	}

	if( typeof(obj) === 'object'){
		result = '{';

		var objLength = Object.keys(obj).length;
		var j = 1;
		for (var key in obj){
			if(obj.hasOwnProperty(key) && typeof(obj[key]) !== "function" &&  key !== "undefined" && obj[key] !== "undefined"){
				result += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
				if(j < objLength){
					result += ',';
					j++;
				}
			}
		}
		
		return result += '}';
	}

	return result;
};
