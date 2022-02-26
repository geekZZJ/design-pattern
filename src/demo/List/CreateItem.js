import Item from "./Item";

// 工厂模式
export default function (list, itemData) {
  return new Item(list, itemData);
}
