class Product {
  constructor(name) {
    this.name = name
  }

  init() {
    alert("init")
  }

  fun1() {
    alert("fun1")
  }

  fun2() {
    alert("fun2")
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

const creator = new Creator()
const p = creator.create('p1')
p.init()
p.fun1()
p.fun2()
