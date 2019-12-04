/* LESSON 2
Prototype is a parent of another object
*/

/* LESSON 3
Objects created by given constructor will have the same prototype
 */

/*LESSON 4
let person = { name: "Vlad" };

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

Object.defineProperty(person, "name", {
  writable: false, //couldn't change the value of attribute
  enurable: false, //won't show in a console
  configurable: false //can't delete property
});

console.log(person);
*/

/*LESSON 5
let array = [];

Object.getPrototypeOf(array);  //the same as array.__proto__
array.__proto__ //objectBase
Array.prototype; //the same as Object.getPrototypeOf(array) or array.__proto__;

let arr = new Array();
Array.prototype //the same as arrayBase;
*/

/*LESSON 6
function Circle(radius) {
  //instance members
  this.radius = radius;

  this.move = function() {
      // this.draw();
    console.log("move");
  };
}

//prototype members
Circle.prototype.draw = function() {
  this.move(); //you could easily call instance member method in prototype and awkward
  console.log("draw");
};

//even if there is another method of toString() it would be overwrite for more accessible one
Circle.prototype.toString = function() {
  return `Circle has radius ${this.radius}`;
};
let c1 = new Circle(1);
let c2 = new Circle(2);
*/

//LESSON 7

function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log("draw");
  };
}

let c1 = new Circle(5);

//doesn't matter when you modify the property of the prototype (object references)
Circle.prototype.move = function() {
  console.log("move");
};

//returns instance members
console.log(Object.keys(c1));

//returns all members (instance + prototype)
for (let key in c1) console.log(key);

c1.hasOwnProperty("radius"); //true (instance member)
c1.hasOwnProperty("draw"); //false (prototype member/property)

//LESSON 8
//Never modify objects you don't know; never add or change an existing methods
Array.prototype.shuffle = function() {
  //...
};

const array = [];
array.shuffle();
