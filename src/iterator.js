// 迭代器模式

// class Iterator {
//   constructor(container) {
//     this.list = container.list;
//     this.index = 0;
//   }
//
//   next() {
//     if (this.hasNext()) {
//       return this.list[this.index++];
//     }
//     return null;
//   }
//
//   hasNext() {
//     return this.index < this.list.length;
//
//   }
// }
//
// class Container {
//   constructor(list) {
//     this.list = list;
//   }
//
//   // 生成遍历器
//   getIterator() {
//     return new Iterator(this);
//   }
// }
//
// const arr = [1, 2, 3, 4, 5, 6];
// const container = new Container(arr);
// const iterator = container.getIterator();
// while (iterator.hasNext()) {
//   console.log(iterator.next());
// }

// function each(data) {
//   // 生成遍历器
//   const iterator = data[Symbol.iterator]();
//   let item = {done: false};
//   while (!item.done) {
//     item = iterator.next();
//     if (!item.done) {
//       console.log(item.value);
//     }
//   }
// }
function each(data){
  for (const item of data) {
    console.log(item)
  }
}

const arr = [1, 2, 3, 4];
const nodeList = document.getElementsByTagName("p");
const m = new Map();
m.set("a", 100);
m.set("b", 200);

each(arr);
each(nodeList);
each(m);
