// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'function' || obj === undefined) {

    return '';
  }
  var primitiveTypes = ['number', 'boolean'];
  if (primitiveTypes.includes(typeof obj) || obj === null) {
    return '' + obj;
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)) {
    var result = [];
    obj.forEach(function (item) {
      result.push(stringifyJSON (item));
    });
    
    return '[' + result.join(',') + ']';
  }
  
  if (typeof obj === 'object') {
    var result = [];
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    
    return '{' + result.join(',') + '}';
  }

};
