const EventEmitter = require("events").EventEmitter;

// const emitter1 = new EventEmitter();
// emitter1.on("some", info => {
//   console.log("fn1", info);
// });
// emitter1.on("some", info => {
//   console.log("fn2", info);
// });
//
// // 触发some事件
// emitter1.emit("some", "xxx");

// class Dog extends EventEmitter {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }
//
// const simon = new Dog("simon");
// simon.on("bark", function () {
//   console.log(this.name, "barked");
// });
//
// setTimeout(function () {
//   simon.emit("bark");
// }, 1000);

// const fs = require("fs");
// const readStream = fs.createReadStream("./1.txt");
//
// let length = 0;
// readStream.on("data", function (chunk) {
//   length += chunk.toString().length;
// });
//
// readStream.on("end", function () {
//   console.log("length", length);
// });

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./1.txt")
});

let limeNum = 0;
rl.on("line", function () {
  limeNum++;
});

rl.on("close", function () {
  console.log("limeNum", limeNum);
});
