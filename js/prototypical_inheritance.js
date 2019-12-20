/*LESSON 1

function Shape() {}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

// Circle.prototype = Object.create(Object.prototype); inherits from ObjectBase that was before

function Square() {}

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

Circle.prototype = Object.create(Shape.prototype);

let s = new Square(4);
let c = new Circle(5);
*/

/*LESSON 2

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle; //when you reset the prototype - reset the constructor as well
let c = new Circle(5);

*/

/*LESSON 3

function Shape(color) {
  this.color = color;
}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Circle(radius, color) {
  Shape.call(this, color); //that's how you're calling super constructor
  this.radius = radius;

  this.draw = function() {
    console.log("draw");
  };
}

let c = new Circle(5, "red");

*/

/*LESSON 4
function extend(Child, Parent) { //intermediate function inheritance
  Child.prototype = Object.create(Parent.prototype); //Square.prototype = Object.create(Shape);
  Child.prototype.constructor = Child; //Square.prototype.constructor = Square;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};
extend(Square, Shape);
function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

function Circle(radius) {
  this.radius = radius;
}

let sq = new Square(5, "green");
let c = new Circle(5);

// Circle.prototype = Object.create(Shape);
// Circle.prototype.constructor = Circle; 
*/

/* LESSON 5
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

function Circle(radius) {
  this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.dublicate = function() { //set prototype after extend function, 'cause it would overwrite prototype
  Shape.prototype.dublicate.call(this); //Shape.prototype.dublicate()

  console.log("Dublicate circle");
};

let c = new Circle(5);
*/

/*LESSON 6 POLYMORPHISM ('poly' - many, 'morph' - changing)

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

function Circle() {}

extend(Circle, Shape);

Circle.prototype.dublicate = function() {
  console.log("dublicate circle");
};

function Square() {}

extend(Square, Shape);

Square.prototype.dublicate = function() {
  console.log("dublicare square");
};

let shapes = [new Square(), new Circle()];

for (let shape of shapes)
  shape.dublicate();

*/

/* LESSON 7
Avoid creating inheritance hierarchies
Favor Composition over Inheritance - Use mixins to achieve composition
 */

/*LESSON 8 Mixins or Composition
function mixin(target, ...sources) { //rest operator
  Object.assign(target.prototype, ...sources); //spread operator
}
let canEat = {
  eat: function() {
    this.hunger--;
    console.log("eating");
  }
};
let canWalk = {
  walk: function() {
    console.log("walking");
  }
};

let canSwim = {
  swim: function() {
    console.log("swim");
  }
};
function Goldfish() {}

function Person() {}

mixin(Person, canWalk, canEat); //Object.assign(Person.prototype, canWalk, canEat)
mixin(Goldfish, canEat, canSwim); //Object.assign(Goldfish.prototype, canEat, canSwim)

let p = new Person();
let g = new Goldfish();
*/

//EXERCISE 1

function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.addItem = function(item) {
    this.items.push(item);
  };
  this.items = items;
  this.removeItem = function(item) {
    this.items.splice(items.indexOf(item), 1);
  };
  this.render = function() {
    console.log(
      this.items.reduce(function(acc, item, i) {
        if (i == 0) return "<section>\n" + acc + "<option>" + item + "</option>\n";
        if (i == items.length - 1) {
          return acc + "<option>" + item + "</option>\n" + "</section>";
        }
        return acc + "<option>" + item + "</option>\n";
      }, "")
    );
  };
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlElement;

//EXERCISE 2

function HtmlImageElement(src) {
  this.render = function() {
    //console.log("<img1 src= " + this.src + " />");
    return `<img src= "${src}" /> `
  };
  this.src = `"${src}"`;
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

let elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://")
];

for (elem of elements) {
  elem.render()
}
