var products = require('com/products/products');
var tabs = require('com/tabs/tabs');
var todo = require('com/todo/todo');
var u = require('com/u');

exports.controller = function() {
 	
};

exports.view = function(ctrl) {
  return INCLUDE('home/home.tpl');
};
