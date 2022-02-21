// 原型模式
const prototype = {
  getName: function () {
    return this.first + " " + this.last;
  },
  say: function () {
    alert("hello");
  }
};

// 基于原型创建x
const x = Object.create(prototype);
x.first = "A";
x.last = "B";
alert(x.getName());
x.say();

// 基于原型创建y
const y = Object.create(prototype);
y.first = "C";
y.last = "D";
alert(y.getName());
y.say();
