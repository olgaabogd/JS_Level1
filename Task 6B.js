const Animal = require("./task 6A");
class Rabbit extends Animal {
hide() {
    console.log(`${this.name} прячется!`);
}
}

let rabbit = new Rabbit("Кролик");

rabbit.run(5); 
rabbit.hide(); 
module.exports = Rabbit;