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

let arr = new Array();
Array.prototype;
arr.constructor.prototype;
*/