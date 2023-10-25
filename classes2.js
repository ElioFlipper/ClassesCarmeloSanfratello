class Person {
    constructor(firstname, lastname) {
        this.firstname=firstname;
        this.lastname=lastname
    }
}

class Developer extends Person {
    constructor(firstname, lastname, role) {
        super(firstname, lastname);
        this.role = role;
    }
}

const developer = new Developer ('Mario', 'Rossi', "Fullstack");
console.log(developer.firstname + " " + developer.lastname + " " + developer.role);