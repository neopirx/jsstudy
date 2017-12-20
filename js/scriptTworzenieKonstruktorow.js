var arr = new Array();

function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;

    this.sayHello = function() {
        return this.fName + " " + this.lName + ", Ty chuju";
    }
}
  

var person1 = new Person("Jan", "Kowalski");
var person2 = new Person("maciej", "debil");

console.log(person1.sayHello());