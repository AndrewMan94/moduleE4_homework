class Electric {
    constructor(section) {
        this.section = section || 'Electric appliances'
        this.switch = true
    }

    info() {
        console.group(`${this.name}:`)
        console.log(`Section: ${this.section}`)
        console.log(`Type: ${this.type}`)
        this.switch ? console.log(`Status:  ON`) : console.log(`Status:  OFF`)
        console.groupEnd()
    }

    switcher() {
        if (this.switch) {
            this.switch = false
            console.log(`The switch went off "${this.name}", ${this.type} - switched to the status: ${this.switch}`)
        } else {
            this.switch = true
            console.log(`The switch went off "${this.name}", ${this.type} - switched to the status: ${this.switch}`)
        }
        return this.switch
    }
}

class Lamps extends Electric {
    constructor(name, type, section) {
        super(section)
        this.name = name
        this.type = type
    }
}

class Computers extends Electric {
    constructor(name, type, section) {
        super(section)
        this.name = name
        this.type = type
    }
}

const lamp = new Lamps("Lamp", "LED")
const comp1 = new Computers("ASUS", 'Laptop', 'Computers')
const comp2 = new Computers("IBM", 'PC', 'Computers')

lamp.info()
lamp.switcher()
lamp.info()
comp1.info()
comp1.switcher()
comp1.info()
comp2.info()
console.log(lamp.switch, comp1.switch, comp2.switch)
