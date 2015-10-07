"use strict";
var memo = require('./DataStore.js');

function Model(schema) {
  this.id = null;
  this.schema = schema;
  if (!memo.store[this.constructor.name])
    memo.store[this.constructor.name] = [];
  var keys = schema ? Object.keys(schema) : [];
  for (var i = 0; i < keys.length; i++) {
    this[keys[i]] = null;
  }
}

Model.prototype.save = function() {
  this.id = Model.getNextId(this.constructor.name);
  memo.store[this.constructor.name].push(this);
}

Model.prototype.destroy = function() {    // -1 for 1-based index;
  memo.store[this.constructor.name][this.id - 1] = null;
}

Model.getNextId = function(klassName) {  // +1 for 1-based index;
  return memo.store[klassName ? klassName : 'Model'].length + 1;
}

Model.find = function(id) {
  var list = memo.store[this.name];
  for (var i = 0; i < list.length; i++) {
    if (list[i] && id === list[i].id)
      return list[i];
  }
  return null;   // null if destroyed;
}

Model.extend = function(Klass) {
  Klass.prototype = Object.create(Model.prototype);
  Klass.prototype.constructor = Klass;

  var keys = Object.keys(Model);
  for (var i = 0; i < keys.length; i++) {
    Klass[keys[i]] = Model[keys[i]];
  }
}

module.exports = Model;
