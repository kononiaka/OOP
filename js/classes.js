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