//creating an object and adding prototype to it
function Person(name,age){
    this.name = name;
    this.age = age;
}
person.prototype.greet = function (){
    console.log(`Hello, I am ${this.name} and my age is ${this.age}`)
}

const Person1 = new Person("Vaishnavi",21);
const Person2 = new Person("Nikita",20);
Person1.greet();
Person2.greet();

