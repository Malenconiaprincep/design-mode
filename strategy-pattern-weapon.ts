interface WeaponBehavior {
  useWeapon(): void
}

class KnifteBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('use knife')
  }
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('use bow and arrow')
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('use axe')
  }
}

class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('use sword')
  }
}

abstract class Character {
  useWeapon: WeaponBehavior

  setWeapon(wb: WeaponBehavior) {
    this.useWeapon = wb
  }

  abstract fight(): void
}

class Queen extends Character {
  fight() {

  }
}

class Troll extends Character {
  fight() {

  }
}

class Knight extends Character {
  fight() {
    
  }
}

class King extends Character {
  fight() {
    
  }
}