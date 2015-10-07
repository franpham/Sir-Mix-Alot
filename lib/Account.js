"use strict";
var Model = require('./Model.js');
var User = require('./User.js');

function Account() {
  Model.call(this, { user : User, accountNumber : Number, address : String, balance : Number });
  this.id = null;
  this.user = null;
  this.accountNumber = null;
  this.address = null;
  this.balance = null;
}
Account.prototype = Object.create(Model.prototype);
Account.prototype.constructor = Account;
Model.extend(Account);

module.exports = Account;