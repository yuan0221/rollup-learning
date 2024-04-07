var sum = function (a, b) { return a + b; };

// compiler Class
var Cls = function Cls(name, age) {
  this.name = name;
  this.age = age;
};
Cls.prototype.say = function say () {
  console.log(this.name, this.age);
};
var p = new Cls('xiaoming', 18);
p.say();

// compiler module
console.log(sum(1, 2));

// compiler ...
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = a.concat( b);
console.log(c);

// compiler Promise
Promise.resolve().then(function () { console.log('success'); });

// compiler **
console.log(Math.pow( 2, 3 ));

// compiler ...rest
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2) {
  var rest = [], len = arguments.length - 2;
  while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

  console.log(rest);
}

// buble 不能编译 await
// const sleep = new Promise(resolve => setTimeout(resolve, 1000));
// await sleep()
// console.log(123)
