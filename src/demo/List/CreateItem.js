import Item from "./Item";

// 代理模式
function createDiscount(itemData) {
  return new Proxy(itemData, {
    get(target, p, receiver) {
      if (p === "name") {
        return `${target[p]} 【折扣】`;
      }
      if (p === "price") {
        return target[p] * 0.8;
      }
      return target[p];
    }
  });
}

// 工厂模式
export default function (list, itemData) {
  if (itemData.discount) {
    itemData = createDiscount(itemData);
  }
  return new Item(list, itemData);
}
