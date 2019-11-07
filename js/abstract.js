//LESSON 4
const object = {}; //the same as let obj = new Object ()
new String(); //the same as "", '',``
new Boolean(); //the same as false, true
new Number(); //the same as 1,2,3, ...

// TAKEAWAY: every object has constructor property, which references to the function which was called to create this object;

//LESSON 5
//FACTORY FUNCTION

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);
circle.draw();

//FUNCTION CONSTRUCTION

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

//Takeaway: there is no differences between those two patterns. Choose by yourself what you like more.

//LESSON 6

const Circle1 = new Function(
  "radius",
  `  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };`
);

const circle1 = new Circle1(1);

//call method for objects
Circle.call(
  {}, //refers to this in an object
  1
);

//apply method for objects
Circle.apply(
  {}, //refers to this in an object
  [1, 2, 3] // the same as call, but better to use if you have an existing array
);

//Takeaway: in JS functions are objects;

//LESSON 7

//value types: string, boolean, number, undefined, null
//reference types: object, function, array

let x = 10;
let y = x;

x = 20;
console.log("x:" + x);
console.log("y:" + y);

let obj = { value: 10 };

obj.value = 20;

function increase(obj1) {
  obj1.value++;
}
increase(obj);
console.log(obj);

//Takeaway: primitives are copied by value; objects are copied by references.

//LESSON 8

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle2 = new Circle(10);

circle2.location = { x: 1 };
circle2["location"] = { x: 2 }; //is exactly the same

delete circle2.location; // delete property

//LESSON 9

for (let key in circle2) {
  //iteration of properties in object
  if (typeof circle2[key] !== "function") {
    console.log(key, circle2[key]); //to show value of properties
  }
}
const keys = Object.keys(circle2); // another way to iterate properties
console.log(keys);

if ("radius" in circle) {
  //check does object have a property
  console.log("Circle has a radius");
}

//LESSON 10 Abstraction - hide complexity and show essentials

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 1 };
  let computeOptimumLocation = function(factor) {
    //...
  };
  this.draw = function() {
    let a,
      b = 0; //this variables die after executing, cause it's scope
    computeOptimumLocation(0, 1); //don't to use this 'cause JS uses closure
    //defaultLocation
    //this.radius
    console.log("draw");
  };
}


function StopWatch() {
  let startTime,
    endTime,
    duration = 0;
  running = false;

  this.start = function() {
    if (running) console.log("Timer already has been started");

    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) console.log("Timer hasn't been started");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

    duration += seconds;
  };

  this.reset = function() {
    startTime = 0;
    endTime = 0;
    duration = 0;
    running = false;

    console.log(startTime, endTime, duration);
  };

  // Object.defineProperty(this, "duration", {
  //   get: function() {
  //     return duration;
  //   }
  // });
}

let sw = new StopWatch();
