import $ from "jquery";
import getCart from "../ShoppingCart/GetCart";
import StateMachine from "javascript-state-machine";

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
    const $btn = $("<button>");

    const fsm = new StateMachine({
      init: "加入购物车",
      transitions: [
        {
          name: "add",
          from: "加入购物车",
          to: "从购物车删除"
        },
        {
          name: "del",
          from: "从购物车删除",
          to: "加入购物车"
        }
      ],
      methods: {
        onAdd: () => {
          this.addToCartHandle();
          updateText();
        },
        onDel: () => {
          this.deleteFromCartHandle();
          updateText();
        }
      }
    });

    function updateText() {
      $btn.text(fsm.state);
    }


    $btn.click(() => {
      if (fsm.is("加入购物车")) {
        fsm.add();
      } else {
        fsm.del();
      }
    });

    updateText();
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
