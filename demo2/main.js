import { sum } from './modules/sum'

// compiler es6
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


console.log(sum(1, 2))

const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b]
console.log(c)

Promise.resolve().then(() => console.log('success'))


// compiler es7
console.log(2 ** 3)
console.log([1].includes(1))

// compiler es8
console.log(Object.entries({ a: 1, b: 2, c: 3, }));

// compiler es9
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2, ...rest) {
  console.log(rest)
}

// compiler es10
console.log([1, [2, [3, 4]]].flat(Infinity))


// compiler es2023
const { promise, resolve, reject } = Promise.withResolvers();
resolve('111')