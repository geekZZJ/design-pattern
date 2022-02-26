import $ from "jquery"
import ShoppingCart from "./ShoppingCart";
import List from "./List";

export default class App {
  constructor(id) {
    this.$el = $(`#${id}`)
  }

  // 初始化购物车
  initShoppingCart() {
    const shoppingCart = new ShoppingCart(this)
    shoppingCart.init()
  }

  // 初始化列表
  initList() {
    const list = new List(this)
    list.init()
  }

  init() {
    this.initShoppingCart()
    this.initList()
  }
};
