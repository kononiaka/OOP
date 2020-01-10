let _items = new WeakMap()

class Stack {
    constructor() {
        _items.set(this, [])
    }
    peek() {
        if (_items.get(this).length == 0) throw new Error('stack is empty')
        return _items.get(this).length
    }
    pop(obj) {
        if (_items.get(this).length == 0) throw new Error('stack is empty')

        _items.get(this).pop(obj)
    }
    push(obj) {
        _items.get(this).push(obj)
    }

    get count() {
        return _items.get(this).length
    }
}
let stack = new Stack(0)