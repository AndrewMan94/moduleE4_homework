function Electric() {
    this.section = 'Electro'
    this.switch = true
}

Electric.prototype.info = function () {
    // if (this.switch){
    console.group(`${this.name}:`)
    console.log(`Section: ${this.section}`)
    console.log(`Type: ${this.type}`)
    this.switch ? console.log(`Status:  ON`) : console.log(`Status:  OFF`)
    console.groupEnd()
}

Electric.prototype.switcher = function () {
    if (this.switch) {
        this.switch = false
        console.log(`The switch went off "${this.name}" - switched to the status: ${this.switch}`)
    } else {
        this.switch = true
        console.log(`The switch went off "${this.name}" - switched to the status: ${this.switch}`)
    }
    return this.switch
}

function Lamps(name, type) {
    this.name = name,
        this.type = type
}
Lamps.prototype = new Electric()
Lamps.prototype.info = function () {
    if (this.switch) {
        console.log(`Department "Lighting devices"\n${this.name}:\nType: ${this.type}\nStatus:  ON`)
    } else {
        console.log(`Department "Lighting devices"\n${this.name}:\nType: ${this.type}\nStatus:  OFF`)
    }
}

function Computers(name, type) {
    this.name = name,
        this.type = type
}
Computers.prototype = new Electric()

const lamp = new Lamps("Lamp", "LED")

const comp1 = new Computers("Computer", 'Laptop')
const comp2 = new Computers("Computer", 'PC')

// console.log(lamp)
lamp.info()
lamp.switch = lamp.switcher()
lamp.info()
lamp.switch = lamp.switcher()
lamp.info()
// console.log(comp)
comp1.info()
comp1.switcher()
comp1.info()
comp2.info()
