// compiler Class
class Cls {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(this.name, this.age)
  }
}
const p = new Cls('xiaoming', 18)
p.say()


// compiler **
console.log(2 ** 3)


// compiler ...rest
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2, ...rest) {
  console.log(rest)
}