"use strict";

var a = () => {};
var a = b => b;
const double = [1, 2, 3].map(num => num * 2);
console.log(double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends() {
    this._friends.forEach(f => console.log(this._name + " knows " + f));
  }
};
console.log(bob.printFriends());
const hello = () => console.log("hello world!");
function test() {
  let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "hello";
  let {
    a,
    b
  } = arguments.length > 1 ? arguments[1] : undefined;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  console.log(x, a, b, args);
}
