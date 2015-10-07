"use strict";
var Model = require('./Model.js');

function Location() {
  Model.call(this, { lat : Number, lng : Number });
  this.id = null;
  this.lat = null;
  this.lng = null;
}
Location.prototype = Object.create(Model.prototype);
Location.prototype.constructor = Location;
Model.extend(Location);

module.exports = Location;