class ElectricalDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOnline = false;
    }
    
    turnOn() {
        console.log(this.name + " включен!");
        this.isOnline = true;
    }

    turnOff() {
        console.log(this.name + " выключен!");
        this.isOnline = false;
    }
}

class Lamp extends ElectricalDevice {
    constructor(name, power, isOnline, light) {
        super(name, power);
        this.isOnline = isOnline;
        this.light = light;
    }
}

class Fridge extends ElectricalDevice {
    constructor(name, power, isOnline, volume) {
        super(name, power);
        this.isOnline = isOnline;
        this.volume = volume;        
    }
}


function energyRate(...devices) {
    let sum = 0;
    for (let device of devices) {
        if (device.isOnline) {
            sum += device.power;
        }
    }
    return sum;
}

const table_lamp = new Lamp('table lamp', 5, false, 'warm white');
const bosch = new Fridge('bosch', 200, false, 30);

table_lamp.turnOn();
bosch.turnOn();
table_lamp.turnOff();

console.log(energyRate(table_lamp, bosch));