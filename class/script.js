class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    alive = true;
}

class Rabbit extends Animal{
    constructor(name){
        super(name);
    }
    jump(){
        console.log(`${this.name} is jumping`);
    }
}

const dog = new Animal('Dog');
const cat = new Animal('Cat');
dog.eat();

const rabbit = new Rabbit('Rabbit');
rabbit.jump();