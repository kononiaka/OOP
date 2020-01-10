class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }
    draw() {
        return console.log(_radius.get(this))
    }
}
let c = new Circle(10)
console.log(_radius.get(c))