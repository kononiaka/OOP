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

//Function Expression not hoisted
const sayGoodbye = function () {};
const number = 1;

const c = new Circle()
// Class Declaration are not hoisted
class Circle {}

//Class Expression hoisted, but try not to use it
const square = class {}
*/