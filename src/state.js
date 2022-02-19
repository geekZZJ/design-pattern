// 状态模式
class State {
  constructor(color) {
    this.color = color;
  }

  handle(context) {
    console.log(`turn to ${this.color} light`);
    context.setState(this);
  }
}

class Context {
  constructor() {
    this.state = null;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

const context = new Context();
const green = new State("green");
const yellow = new State("yellow");
const red = new State("red");

// 绿灯亮了
green.handle(context)
console.log(context.getState())

// 黄灯亮了
yellow.handle(context)
console.log(context.getState())

// 红灯亮了
red.handle(context)
console.log(context.getState())
