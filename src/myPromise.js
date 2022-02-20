import StateMachine from "javascript-state-machine";

const fsm = new StateMachine({
  // 初始化状态
  init: "pending", transitions: [{
    // 事件名称
    name: "resolve", from: "pending", to: "fulfilled"
  }, {
    // 事件名称
    name: "reject", from: "pending", to: "rejected"
  }], methods: {
    // 监听resolve
    onResolve: function (state, data) {
      // state为当前状态机实例；data为fsm.resolve(xxx)传递的参数
      data.successList.forEach(fn => fn());
    }, onReject: function (state, data) {
      // state为当前状态机实例；data为fsm.reject(xxx)传递的参数
      data.failList.forEach(fn => fn());
    }
  }
});

// 定义Promise
class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];
    fn(() => {
      // resolve函数
      fsm.resolve(this);
    }, () => {
      // reject函数
      fsm.reject(this);
    });
  }

  then(successFn, failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }
}

// 测试代码
function loadImg(src) {
  return new MyPromise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (e) {
      reject(e);
    };
    img.src = src;
  });
}

const src = "https://raw.githubusercontent.com/jakesgordon/javascript-state-machine/master/examples/matter.png";
const result = loadImg(src);
result.then(function () {
  console.log("ok1");
}, function () {
  console.log("fail1");
});

result.then(function () {
  console.log("ok2");
}, function () {
  console.log("fail2");
});
