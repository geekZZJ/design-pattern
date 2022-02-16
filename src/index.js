import { readonly } from "core-decorators";
class Person {
  @readonly
  name() {
    return "test";
  }
}

const p = new Person();
alert(p.name());
p.name = function () {
  console.log(11111);
};
