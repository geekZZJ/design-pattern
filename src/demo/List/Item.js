import $ from "jquery";
import getCart from "../ShoppingCart/GetCart";


class Item {
  constructor(list, data) {
    this.list = list;
    this.data = data;
    this.$el = $("<div>");
    this.cart = getCart();
  }

  init() {
    this.initContent();
    this.initBtn();
    this.render();
  }

  initContent() {
    this.$el.append($(`<p>名称：${this.data.name}</p>`));
    this.$el.append($(`<p>价格：${this.data.price}</p>`));
  }

  initBtn() {
    const $btn = $("<button>test</button>");

    $btn.click(() => {
      // 添加到购物车
      // 从购物车移除
    });
    this.$el.append($btn);
  }

  addToCartHandle() {
    this.cart.add(this.data);
  }

  deleteFromCartHandle() {
    this.cart.del(this.data.id);
  }

  render() {
    this.list.$el.append(this.$el);
  }
}

export default Item;
