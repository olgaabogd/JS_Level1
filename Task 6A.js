class Animal {
constructor(name) {
    this.name = name;
    this.speed = 0;
    
}
run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed of ${this.speed} km/hr.`);
}
stop() {
    this.speed = 0;
    console.log(`${this.name} doesn't move`);
}
}

let animal = new Animal("My pet");
animal.run(5);
module.exports = Animal;