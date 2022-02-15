class Person {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age
  }

  say() {
    console.log(this.age)
  }
}

const xiaoming = new Student('xiaoming', 10)
xiaoming.say()
console.log(xiaoming.getName())
