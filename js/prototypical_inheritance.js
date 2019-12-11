function Shape() {}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

Circle.prototype = Object.create(Shape.prototype);

function Square() {}
function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log("draw");
  };
}

let c = new Circle(5);
