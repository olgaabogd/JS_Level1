class Animal {
constructor(name) {
    this.name = name;
    this.speed = 0;
    
}
run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed} км/ч.`);
}
stop() {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
}
}

let animal = new Animal("Мой питомец");
animal.run(5);
module.exports = Animal;