

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
const p = new Cls('xiaoming', 1012)
p.say()


// compiler ...rest
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2, ...rest) {
  console.log(rest)
}

// compiler await
// const sleep = new Promise(resolve => setTimeout(resolve, 1000));
// await sleep()
// console.log(123)


// compiler es2023
const { promise, resolve, reject } = Promise.withResolvers();
resolve('111')