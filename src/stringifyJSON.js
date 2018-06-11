// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];
  if (typeof obj === 'function' || obj === undefined) {
    return '';
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)) {
    obj.forEach(function (item) {
      result.push(stringifyJSON (item));
    });  
    return '[' + result.join(',') + ']';
  }
  
  if (typeof obj === 'object' && obj) {
    for (var key in obj) {
      if (stringifyJSON(obj[key])) { 
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }

  return '' + obj;
};
