/*EXCERCISE 1 Classes

class Circle {
    constructor(radius) {
        this.radius = radius
        this.move = function () {
            console.log('move');
        }
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle(2)

*/

/*EXCERCISE 2 Hoisting

//Function Declaration are hoisted (raised to the top)
function sayHello() {}

// const c = new Circle()

//Function Expression not hoisted
// const sayGoodbye = function () {};
const number = 1;

// Class Declaration are not hoisted
class Circle {}

console.log(square);

//Class Expression not hoisted, try not to use it
const square = class {}
*/

/*Excercise 3 Static Method

 class Circle {
    constructor(radius) {
        this.radius = radius
    }

    //Instance method; object instance
    draw() {}

    //Static method; only Class instance
    static parse(str) {
        let radius = JSON.parse(str).radius
        return new Circle(radius)
    }
}
let c = Circle.parse('{"radius": 10}')

*/

/*LESSON 4 Keyword "this"
const Circle = function () {
    this.draw = function () {
        console.log(this) //"this" will point on object
    }
}
let c = new Circle() //without new "this" will point in a global object

// //Method call
let draw = c.draw;
console.log(draw)

// //Function call
draw() 

// 'use strict' // will hide global object in undefined, not to change global object

class Circle {
    draw() {
        console.log(this)
    }
}

let c = new Circle;
let draw = c.draw;
console.log(draw);
draw() //in classes we are not using strict mode, it goes by a default
*/

/*LESSON 5 Private properties and methods

//the underscore - is just a naming convension
let _radius = Symbol()
let _draw = Symbol()

class Circle {
    constructor(radius) {
        //this.radius = radius // this['radius'] = radius is totally the same 
        this[_radius] = radius
    }
    _draw() {
        console.log('draw')
    }
}

let c = new Circle(5);
let key = Object.getOwnPropertySymbols(c)[0]
console.log(c[key]);
*/

/*LESSON 6 private methods via WeakMap

let _radius = new WeakMap()
let _move = new WeakMap()

class Circle {
    constructor(radius) {
        _radius.set(this, radius)
        _move.set(this, () => {
            console.log('move', this);
        })
    }
    draw() {
        _move.get(this)()
        console.log(_radius.get(this))
    }
}

let c = new Circle(1)
*/

//LESSON 7 Getters and setters in classes

let _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }
    getRadius() {
        _radius.get(this)
    }
}

let c = new Circle(1)