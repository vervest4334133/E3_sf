function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isOnline = false;
}

ElectricalDevice.prototype.turnOn = function() {
    console.log(this.name + " включен!");
    this.isOnline = true;
}

ElectricalDevice.prototype.turnOff = function() {
    console.log(this.name + " выключен!");
    this.isOnline = false;
}

function Lamp(name, power, light) {
    this.name = name;
    this.power = power;
    this.light = light;
}

Lamp.prototype = new ElectricalDevice();

function Fridge(name, power, volume ) {
    this.name = name;
    this.power = power;
    this.volume = volume;
}

Fridge.prototype = new ElectricalDevice();

function energyRate(...devices) {
    let sum = 0;
    for (let device of devices) {
        if (device.isOnline) {
            sum += device.power;
        }
    }
    return sum;
}

const table_lamp = new Lamp('table lamp', 5, 'warm white');
const bosch = new Fridge('bosch', 200, 30);

table_lamp.turnOn();
bosch.turnOn();
table_lamp.turnOff();

console.log(energyRate(table_lamp, bosch));