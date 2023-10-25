class Person {
    constructor(firstname, lastname) {
        this.firstname=firstname;
        this.lastname=lastname
    }
}
const developer = new Person('Mario', 'Rossi');
console.log(developer.firstname + " " + developer.lastname);