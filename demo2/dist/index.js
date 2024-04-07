(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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

  // compiler Class
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
  var p = new Cls('xiaoming', 1012);
  p.say();

  // compiler ...rest
  restParam(1, 2, 3, 4, 5);
  function restParam(p1, p2) {
    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }
    console.log(rest);
  }

  // compiler await
  // const sleep = new Promise(resolve => setTimeout(resolve, 1000));
  // await sleep()
  // console.log(123)

  // compiler es2023
  var _Promise$withResolver = Promise.withResolvers();
    _Promise$withResolver.promise;
    var resolve = _Promise$withResolver.resolve;
    _Promise$withResolver.reject;
  resolve('111');

}));
//# sourceMappingURL=index.js.map
