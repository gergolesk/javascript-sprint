class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    makeSound() {
        console.log("I am a " + this.species);

    }  
}

class Dog extends Pet {
    constructor(name, age, breed, favoriteToy) {
        //this.name = name;
        //this.age = age;
        super(name, age, "Dog");
        this.breed = breed;
        this.favoriteToy = favoriteToy;
    }

    fetch() {
        console.log(this.name + " is fetching its " + this.favoriteToy);
    }
}

class Cat extends Pet {
    constructor(name, age, color, favoriteNapSpot) {
        //this.name = name;
        //this.age = age;
        super(name, age, "Cat");
        this.color = color;
        this.favoriteNapSpot = favoriteNapSpot;
    }

    purr() {
        console.log(this.name + " purrs on the " + this.favoriteNapSpot);
    }
}