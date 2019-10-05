'use strict';

// Vehicle Class
class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }
}

// Car Class
class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
    this.name = name;
  }
}

// Motorcycle Class
class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
    this.name = name;
  }

  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};
