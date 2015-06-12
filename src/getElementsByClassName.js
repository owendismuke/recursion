// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var matched = arguments[2] || [];
	var body = arguments[1] || document.body;
	var elements = body.childNodes;
	
	if(body.classList){
		for (var c = 0; c < body.classList.length; c++){
			if (body.classList[c] === className){
				matched.push(body);
			}
		}
	}

	if (elements) {
		for (var e = 0; e < elements.length; e++){
			getElementsByClassName(className, elements[e], matched);
		}
	}

	return matched;
};
