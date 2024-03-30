class Animal {
  static offspring = [];
  details = { name: 'animal' };

  printName() {
    console.log(`My name is ${this.details.name}`);
  }
}

class Cat extends Animal {
  haveOffspring() {
    Cat.offspring.push('kitten');
  }
}
class Dog extends Animal {
  haveOffspring() {
    Dog.offspring.push('puppy');
  }
}

const cat1 = new Cat();
cat1.details.name = 'cat1';
cat1.printName();
cat1.haveOffspring();

const dog1 = new Dog();
dog1.details.name = 'dog1';
dog1.printName();
dog1.haveOffspring();