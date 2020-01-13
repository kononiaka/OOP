//Implementation Detail
let _radius = new WeakMap();


// Public Interface
export class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }
    draw() {
        console.log('Circle radius: ' + _radius.get(this))
    }
}

