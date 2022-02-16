// 单例模式
class Singleton {
  login() {
    console.log("login...")
  }
}

Singleton.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new Singleton()
    }
    return instance
  }
})()

const obj1 = Singleton.getInstance()
obj1.login()
const obj2 = Singleton.getInstance()
obj2.login()
console.log(obj1 === obj2)
