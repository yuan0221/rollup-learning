function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var sum = function sum(a, b) {
  return a + b;
};

// compiler es6
var Cls = /*#__PURE__*/function () {
  function Cls(name, age) {
    _classCallCheck(this, Cls);
    this.name = name;
    this.age = age;
  }
  return _createClass(Cls, [{
    key: "say",
    value: function say() {
      console.log(this.name, this.age);
    }
  }]);
}();
var p = new Cls('xiaoming', 18);
p.say();
console.log(sum(1, 2));
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [].concat(a, b);
console.log(c);
Promise.resolve().then(function () {
  return console.log('success');
});

// compiler es7
console.log(Math.pow(2, 3));
console.log([1].includes(1));

// compiler es8
console.log(Object.entries({
  a: 1,
  b: 2,
  c: 3
}));

// compiler es9
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }
  console.log(rest);
}

// compiler es10
console.log([1, [2, [3, 4]]].flat(Infinity));

// compiler es2023
var _Promise$withResolver = Promise.withResolvers();
  _Promise$withResolver.promise;
  var resolve = _Promise$withResolver.resolve;
  _Promise$withResolver.reject;
resolve('111');
