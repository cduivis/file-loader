const loader = require('./index');

module.exports = loader.default;
module.exports.raw = loader.raw;
module.exports.pitch = function() {
  loader.getOutputPath(this);
};
