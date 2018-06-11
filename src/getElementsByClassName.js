// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var getElementsByClassName = function(className) {

  var output = [];

  var search = function(node) {
    var node = node || document.body;
    if (node.classList && node.classList.contains(className)) {
      output.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      search(node.children[i]);
    }
  }

  search();
  return output;

};

