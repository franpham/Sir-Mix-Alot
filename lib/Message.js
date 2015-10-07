"use strict";
var Model = require('./Model.js');
var User = require('./User.js');

function Message() {
  Model.call(this, { from : User, to : User, message : String, sent : Date });
  this.id = null;
  this.from = null;
  this.to = null;
  this.message = null;
  this.sent = null;
}
Message.prototype = Object.create(Model.prototype);
Message.prototype.constructor = Message;
Model.extend(Message);

module.exports = Message;