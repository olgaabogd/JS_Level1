const Animal = require("./task 6A");
class Rabbit extends Animal {
hide() {
    console.log(`${this.name} hides!`);
}
}

let rabbit = new Rabbit("Rabbit");

rabbit.run(5); 
rabbit.hide(); 
module.exports = Rabbit;