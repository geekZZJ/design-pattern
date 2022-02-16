// 装饰器
// 为对象添加新功能
// 不改变其原有的结构和功能
class Circle {
  draw() {
    console.log("画一个圆形");
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    this.setRedBorder(circle);
  }
  setRedBorder(circle) {
    console.log("设置红色边框");
  }
}

const circle = new Circle();
circle.draw();

const dec = new Decorator(circle);
circle.draw();

// @testDec(false)
// class Demo {}

// function testDec(isDec) {
//   return function (target) {
//     target.isDec = isDec;
//   };
// }

// alert(Demo.isDec);

// function mixins(...list) {
//   return function (target) {
//     Object.assign(target.prototype, ...list);
//   };
// }

// const Foo = {
//   foo() {
//     alert("foo");
//   },
// };

// @mixins(Foo)
// class MyClass {}
// const obj = new MyClass();
// obj.foo();

// function readonly(target, name, des) {
//   des.writable = false;
//   return des;
// }

// class Person {
//   constructor() {
//     this.first = "a";
//     this.last = "b";
//   }

//   @readonly
//   name() {
//     return `${this.first} ${this.last}`;
//   }
// }

// const p = new Person();
// console.log(p.name());
// p.name = function () {
//   console.log(111);
// };

// function log(target, name, dec) {
//   const oldValue = dec.value;
//   dec.value = function () {
//     console.log(`calling ${name} with `, arguments);
//     return oldValue.apply(this, arguments);
//   };
//   return dec;
// }

// class Math {
//   @log
//   add(a, b) {
//     return a + b;
//   }
// }

// const math = new Math();
// const result = math.add(2, 4);
