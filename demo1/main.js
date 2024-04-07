import { sum } from './modules/sum'

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

// compiler module
console.log(sum(1, 2))

// compiler ...
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b]
console.log(c)


// compiler ...rest
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2, ...rest) {
  console.log(rest)
}

// buble 不能编译 async/await
// const sleep = new Promise(resolve => setTimeout(() => resolve('aaa'), 1000));
// async function run() {
//   const res = await sleep()
//   console.log(res)
// }
// run()
