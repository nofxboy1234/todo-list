function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

Player.prototype.age = 19;
Player.prototype.setAge = function (newAge) {
  this.age = newAge;
  // Player.prototype.age = newAge;
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

console.log(player1.age);
console.log(player2.age);

player1.setAge(20)

console.log(player1.age);
console.log(player2.age);