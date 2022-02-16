// 适配器模式
// 旧接口格式和使用者不兼容
// 中间加一个适配转换接口

// 旧接口
class Adaptee {
  specialRequest(){
    return "德国标准插头"
  }
}

// 适配器
class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request(){
    const info = this.adaptee.specialRequest()
    return `${info} - 转换器 - 中国标准插头`
  }
}

const target = new Target()
const result = target.request()
console.log(result)
