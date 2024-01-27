class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    gretting() {
        console.log(`My name is ${this.name} and I'm ${this.age}`)
    }
}

module.exports = Person;