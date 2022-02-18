// 保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  attach(observer) {
    this.observers.push(observer);
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log(`${this.name} update,state:${this.subject.getState()}`);
  }
}


const sub = new Subject();
const o1 = new Observer("o1", sub);
const o2 = new Observer("o2", sub);
const o3 = new Observer("o3", sub);

sub.setState(1)
sub.setState(2)
