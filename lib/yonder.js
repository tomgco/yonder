var _ = require('underscore')
  , yindow = require('./yindow');

module.exports.createYonder = function(options) {

  options = _.extend({}, options);

  var yindows = {},
    self = {};

  function addYindow(yindow) {
    return yindows[yindow.name] = yindow;
  }

  function find(name) {
    return yindows[name];
  }

  function getNextName() {
    return 'y' + (Object.keys(yindows).length + 1);
  }

  function createYindow() {
    return addYindow(yindow.createYindow({ name: getNextName() }));
  }

  self.createYindow = createYindow;
  self.find = find;

  return self;
};