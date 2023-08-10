function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugg = false;
} 

ElectricDevice.prototype.plugIn = function() {
    console.log(this.name + " is plugg");
    this.isPlugg = true;
}

ElectricDevice.prototype.getPowerUsed = function() {
    return this.isPlugg ? this.power : 0;
}

const lampa = new ElectricDevice('lampa', 100);
const lampa1 = new ElectricDevice('lampa', 200);
const comp = new ElectricDevice('comp', 600);

console.log(lampa.getPowerUsed() + comp.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed());

comp.plugIn();
console.log( comp.getPowerUsed());

