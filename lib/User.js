"use strict";
var Model = require('./Model.js');

function User() {
  Model.call(this, {'username' : String, 'password' : String});
  this.id = null;
  this.username = '';
  this.password = '';
}
User.prototype = Object.create(Model.prototype);
User.prototype.constructor = User;
Model.extend(User);

module.exports = User;