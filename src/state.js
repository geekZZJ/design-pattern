// 状态模式
/*class State {
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
console.log(context.getState())*/

// 初始化状态机模型
import StateMachine from "javascript-state-machine";

const fsm = new StateMachine({
  init: "收藏",
  transitions: [
    {
      name: "doStore",
      from: "收藏",
      to: "取消收藏"
    },
    {
      name: "deleteStore",
      from: "取消收藏",
      to: "收藏"
    }
  ],
  methods: {
    // 监听执行收藏
    onDoStore: function () {
      alert("收藏成功");
      updateText();
    },
    // 监听取消收藏
    onDeleteStore: function () {
      alert("已经取消收藏");
      updateText();
    }

  }
});

const btn = document.getElementById("btn1");
btn.onclick = function () {
  if (fsm.is("收藏")) {
    fsm.doStore();
  } else {
    fsm.deleteStore();
  }
};

// 更新按钮的文案
function updateText() {
  btn.innerText = fsm.state;
}

// 初始化文案
updateText();
