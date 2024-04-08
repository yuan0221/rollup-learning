import { sleep } from './module/index';
import $ from 'jquery';
import pkg from '../package.json'
import './style/index.scss'
import './style/b.less'

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

// compiler async/await
async function run() {
  const res = await sleep()
  console.log(res)
}
run()


$('body').append(`<code>${JSON.stringify(pkg)}</code>`)
