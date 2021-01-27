interface FlyBehavior {
  fly(): void;
}

class FlyWithThings implements FlyBehavior {
  fly() {
    console.log('i am flying')
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("i can't flying")
  }
}

interface QuackBehavior {
  quack(): void
}

// 嘎嘎叫
class Quack implements QuackBehavior {
  quack() {
    console.log('quack')
  }
}

// 不叫
class MuteQuack implements QuackBehavior {
  quack() {
    console.log('slient')
  }
}

// 吱吱叫
class Squeak implements QuackBehavior {
  quack() {
    console.log('squeak')
  }
}



abstract class Duck {
   abstract flyBehavior: FlyWithThings
   abstract quackBehavior: QuackBehavior

   public performfly() {
     this.flyBehavior.fly()
   }

   public performquack() {
     this.quackBehavior.quack()
   }

   public swim() {
     console.log('all swim')
   }
}

class ModelDuck extends Duck {
    flyBehavior = new FlyNoWay()
    quackBehavior = new Squeak()

    public display() {
      console.log('display')
    }

    public setflyBehavior(fb: FlyBehavior) {
      this.flyBehavior = fb
    }

    public setQuackBehavior(qb: QuackBehavior) {
      this.quackBehavior = qb
    }
}

var modelduck = new ModelDuck()
modelduck.performfly()
modelduck.setflyBehavior(new FlyWithThings())
modelduck.performfly()

