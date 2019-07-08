//FACTORY FUNCTION

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("draw");
//     }
//   };
// }

// let circle = createCircle(1);
// circle.draw();

function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };

  (this.radius = radius),
    (this.draw = function() {
      console.log("draw");
    });
  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    }
  });
}

let circle = new Circle(10);
circle.defaultLocation = { x: 1, y: 1 };
circle.draw();

// for (let key in circle) {
//   if (typeof circle[key] !== "function") console.log(circle[key]);
// }

// let keys = Object.keys(circle);
// console.log(keys);

// if ("radius" in circle) {
//   console.log("Circle has a radius");
// }
