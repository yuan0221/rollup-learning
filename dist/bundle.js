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


// compiler **
console.log(Math.pow( 2, 3 ));


// compiler ...rest
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2) {
  var rest = [], len = arguments.length - 2;
  while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

  console.log(rest);
}
