function createObject() {
    return Object.create(null);
}

const obj1 = createObject()

console.log(obj1.__proto__)
