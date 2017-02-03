//example of a js module used in a lib folder

exports.sayHello = function(msg) {
    Titanium.API.info('Hello '+msg);
};


var _stepVal =  5;

exports.setPointStep = function(value) {
  _stepVal = value;
};
 
exports.getPointStep = function() {
  return _stepVal;
};

exports.stepVal = _stepVal;
