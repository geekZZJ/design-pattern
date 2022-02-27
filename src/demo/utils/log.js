export function log(type) {
  return function (target, name, desc) {
    const oldVal = desc.value;

    desc.value = function () {
      // 统一打印日志
      console.log(`日志上报 ${type}`);
      // 执行原有方法
      return oldVal.apply(this, arguments);
    };
    return desc;
  };
}
