// // // // // class Employee {
// // // // //     constructor(name, company, position) {
// // // // //         this.name = name;
// // // // //         this.company = company;
// // // // //         this.position = position;
// // // // //     }   
    
// // // // //     get workPlace() {
// // // // //         return this.company;
// // // // //     }

// // // // //     set workPlace(company) {
// // // // //         this.company = company;
// // // // //     }

// // // // //     checkPosition(position){
// // // // //         if (position === this.position) {
// // // // //             return true;
// // // // //         }
// // // // //         return false;
// // // // //     }

// // // // //     static addEmployee(name, company, position) {
// // // // //         return new Employee(name, company, position);
// // // // //     }
// // // // // }

// // // // // // const employee1 = new Employee('Ivan Petrenko', 'SoftServe', "nodejs developer");
// // // // // // console.log( employee1.checkPosition("nodejs developer") );

// // // // // const employee1 = new Employee('Ivan Petrenko', 'SoftServe', "nodejs developer");
// // // // // console.log( employee1.workPlace);

// // // // // const employee3 = Employee.addEmployee('Nick Spenser', 'IBM', "PM");
// // // // // console.log( employee3.workPlace);

// // // // // const context = {
// // // // //     args: [1,2,3,4,5,6,7,0]
// // // // // }

// // // // // function summarize(){
// // // // //     return this.args.reduce((sum, current) => sum + current);
// // // // // }

// // // // // const result =  summarize.call(context)// summarize function, which is called in the context of the context object
// // // // //                 // with the arguments of the values of the args key

// // // // // console.log(result);

// // // // // class Person {
// // // // //     constructor(name, position, rate, koef) {
// // // // //         this.name = name;
// // // // //         this.position = position;
// // // // //         this.rate = rate;
// // // // //         this.koef = koef;
// // // // //     }

// // // // //     getPersonInfo() {
// // // // //         console.log(`${this.name}: ${this.position}, ${this.rate}, ${this.koef}`);
// // // // //     }

// // // // //     calcSalary() {
// // // // //         return this.rate * this.koef;
// // // // //     }

// // // // //     static showAllSalary(empList) {
// // // // //         empList.map((item) => {console.log(`${item.name}: ${item.calcSalary()}`)});
// // // // //     }

// // // // //     static sortAllSalary(empList) {
// // // // //         Employee.showAllSalary(empList.sort((a, b) => a.calcSalary() - b.calcSalary()));
// // // // //     }
// // // // // }

// // // // // class Trainee extends Person{
// // // // //     constructor(name, position, rate, koef) {
// // // // //         super(name, position, rate, koef);
// // // // //     }

// // // // //     calcSalary() {
// // // // //         return super.calcSalary() * 0.60;
// // // // //     }
// // // // // }

// // // // // class Employee extends Person{  
// // // // //     #premium

// // // // //     constructor(name, position, rate, koef, premium) {
// // // // //         super(name, position, rate, koef);
// // // // //         this.#premium = premium;
// // // // //     }

// // // // //     get premium() {
// // // // //         return this.#premium;
// // // // //     }

// // // // //     set premium(value) {
// // // // //         this.#premium = value;
// // // // //     }

// // // // //     calcSalary() {
// // // // //         return super.calcSalary() + this.#premium;
// // // // //     }
// // // // // }

// // // // // const emp1 = new Trainee("Ihor Savchuk", "React dev", 1200, 1);
// // // // // const emp2 = new Trainee("Iryna Goshko", "QC", 900, 1);
// // // // // const emp3 = new Employee("Ostap Bondarchuk", "NodeJS dev", 1300, 1.6, 300);
// // // // // const emp4 = new Employee("Andrii Mazurok", "Ruby dev", 1100, 1.3, 200);
// // // // // const emp5 = new Employee("Vira Mel'nyk", "recruter", 700, 1.2, 400);

// // // // // const empList = [emp1, emp2, emp3, emp4, emp5];


// // // // // // Person.showAllSalary(empList);
// // // // // // console.log("_______________");
// // // // // // Person.sortAllSalary(empList);

// // // // // emp3.getPersonInfo()


// // // // const networkObjects = [
// // // //     {
// // // //         kind: "powerPlant",
// // // //         number: 2,
// // // //         generationDay: 20,
// // // //         generationNight: 20,
// // // //         consumptionDay: 0,
// // // //         consumptionNight: 0
// // // //     }, {
// // // //         kind: "powerPlant",
// // // //         number: 3,
// // // //         generationDay: 30,
// // // //         generationNight: 30,
// // // //         consumptionDay: 0,
// // // //         consumptionNight: 0
// // // //     }, {
// // // //         kind: "powerPlant",
// // // //         number: 1,
// // // //         generationDay: 45,
// // // //         generationNight: 45,
// // // //         consumptionDay: 0,
// // // //         consumptionNight: 0
// // // //     }, {
// // // //         kind: "house",
// // // //         number: 100,
// // // //         generationDay: 0,
// // // //         generationNight: 0,
// // // //         consumptionDay: 180*5/1000,
// // // //         consumptionNight: 180/1000,
// // // //         apartments: 180
// // // //     }, {
// // // //         kind: "house",
// // // //         number: 80,
// // // //         generationDay: 0,
// // // //         generationNight: 0,
// // // //         consumptionDay: 300*5/1000,
// // // //         consumptionNight: 300/1000,
// // // //         apartments: 300
// // // //     }, {
// // // //         kind: "solarPanel",
// // // //         number: 20,
// // // //         generationDay: 2,
// // // //         generationNight: 0,
// // // //         consumptionDay: 0,
// // // //         consumptionNight: 0
// // // //     }, {
// // // //         kind: "solarPanel",
// // // //         number: 10,
// // // //         generationDay: 4,
// // // //         generationNight: 0,
// // // //         consumptionDay: 0,
// // // //         consumptionNight: 0
// // // //     },{
// // // //         kind: "solarPanel",
// // // //         number: 30,
// // // //         generationDay: 3,
// // // //         generationNight: 0,
// // // //         consumptionDay: 0,
// // // //         consumptionNight: 0
// // // //     }
// // // // ];

// // // // const powerLines = [
// // // //     {
// // // //         number: 3,
// // // //         price: 500,
// // // //         power: 70
// // // //     },
// // // //     {
// // // //         number: 4,
// // // //         price: 500,
// // // //         power: 100
// // // //     }
// // // // ];

// // // // class ElectricalNetwork {

// // // //     constructor(networkObject, powerLines) {
// // // //         this.networkObject = networkObject;
// // // //         this.powerLines = powerLines;
// // // //     }

// // // //     // your implementation of the class methods
// // // //     getCityPowerBalance() {
// // // //         return this.networkObject.reduce((sum, current) => sum + current.number * 
// // // //                         (current.generationDay + current.generationNight - current.consumptionDay - current.consumptionNight), 0);
// // // //     }

// // // //     getMaxPowerLines() {
// // // //         return this.powerLines.reduce((sum, current) => sum + current.power * current.number, 0);
// // // //     }

// // // //     getSolarPower() {
// // // //         const solarArr = this.networkObject.filter((item) => item.kind === "solarPanel");
// // // //         return solarArr.reduce((sum, current) => sum + current.generationDay * current.number, 0);
// // // //     }

// // // //     getElectricityCashFlow() {
// // // //         if (Math.abs(this.getCityPowerBalance()) > this.getMaxPowerLines()) {
// // // //             return "The power of the lines is not enough. It is not possible to fully provide the city with electricity or to export it.";
// // // //         }

// // // //         let poweBalance = Math.abs(this.getCityPowerBalance());
// // // //         let cash = 0;
// // // //         for (let item of this.powerLines) {
// // // //             if (item.number * item.power < poweBalance) {
// // // //                 poweBalance -= item.number * item.power;
// // // //                 cash += item.number * item.power * item.price;
// // // //                 continue;
// // // //             }
// // // //             cash += poweBalance * item.price;
// // // //             break;
// // // //         }
        
// // // //         if (this.getCityPowerBalance() < 0 && Math.abs(this.getCityPowerBalance()) < this.getMaxPowerLines()) {
// // // //             console.log("There is insufficient production of own electricity. Electricity will be purchased.");
// // // //             return -1 * cash;
// // // //         }
// // // //         return cash;
// // // //     }
// // // // }

// // // // // const city = new ElectricalNetwork(networkObjects, powerLines);
// // // // // console.log(city.getSolarPower());

// // // // // const city = new ElectricalNetwork(networkObjects, powerLines);
// // // // // console.log(city.getCityPowerBalance()); //268

// // // // // const city = new ElectricalNetwork(networkObjects, powerLines);
// // // // // networkObjects[2].number = 0;
// // // // // networkObjects[1].number = 0;
// // // // // console.log(city.getElectricityCashFlow()); // 134000
// // // // // console.log(city.getMaxPowerLines());
// // // // // console.log(city.getCityPowerBalance());

// // // // const city = new ElectricalNetwork(networkObjects, powerLines);
// // // // networkObjects[4].number = 300;
// // // // console.log(city.getCityPowerBalance());
// // // // console.log(city.getElectricityCashFlow());

// // // class Library  {
// // //     constructor(name) {
// // //         this.name = name;
// // //         this.allBooks = [];
// // //         this.currentBook = null;
// // //         this.lastBook = null;
// // //     }
  
// // //     // your implementation of class methods  
// // //     getAllBooks() {
// // //         return this.allBooks;
// // //     }

// // //     getCurrentBook() {
// // //         return this.currentBook ? `You are currently reading: ${this.currentBook.title}` : "You're not reading any book at the moment";
// // //     }

// // //     getLastBook() {
// // //         return this.lastBook ? `The last book you read was: ${this.lastBook.title}` : "You haven't read anything in a while!";
// // //     }

// // //     getBooksToRead() {
// // //         return this.allBooks.filter((item) => !item.finishedRead).length;
// // //     }

// // //     getFinishedBooks() {
// // //         let finished = this.allBooks.filter((item) => item.finishedRead);
// // //         return finished.length ? finished : "You have not yet read any books from your library!";
// // //     }

// // //     addBook(book) {
// // //         this.allBooks.push(book);
// // //     }

// // //     setCurrent(book) {
// // //         if (book === this.currentBook) return `You are already reading: ${this.currentBook.title}`;
// // //         if (this.currentBook) return `You can't add this book as the current book before finishing: ${this.currentBook.title}`;
// // //         book.isCurrent = true;
// // //         this.currentBook = book;
// // //         return `You just started reading: ${this.currentBook.title}`;
// // //     }

// // //     finishCurrentBook() {
// // //         if (!this.currentBook) {
// // //             return "You're not reading any book right now..."
// // //         }
// // //         this.currentBook.isCurrent = false;
// // //         this.currentBook.finishedRead = true;
// // //         this.lastBook = this.currentBook;
// // //         this.currentBook = null;
// // //         return `You have finished reading: ${this.lastBook.title}`;
// // //     }

// // //   }
  
// // //   class Book  {
// // //     constructor(title, genre, author) {
// // //         this.title = title;
// // //         this.genre = genre;
// // //         this.author = author;
// // //         this.finishedRead = false;
// // //         this.isCurrent = false;
// // //     }
// // //   }  


// // // //   const myLibrary = new Library ("My favorite books");

// // // //   const javaScript = new Book("JavaScript: The Definitive Guide", "Programming", "David Flanagan");
// // // //   const winds = new Book("The Four Winds", "Historical", "Kristin Hannah");
// // // //   const ring = new Book("The Fellowship of the Ring", "Fantasy ", "John Tolkien");

// // // //   const booksList = [javaScript, winds, ring];
// // // //   booksList.forEach((b) => myLibrary.addBook(b));

// // // //   console.log(myLibrary.finishCurrentBook());
// // // //   console.log("here2")

// // // // const myLibrary = new Library ("My favorite books");

// // // // const javaScript = new Book("JavaScript: The Definitive Guide", "Programming", "David Flanagan");
// // // // const winds = new Book("The Four Winds", "Historical", "Kristin Hannah");
// // // // const ring = new Book("The Fellowship of the Ring", "Fantasy ", "John Tolkien");

// // // // const booksList = [javaScript, winds, ring];
// // // // booksList.forEach((b) => myLibrary.addBook(b));

// // // // myLibrary.setCurrent(javaScript);
// // // // myLibrary.finishCurrentBook();
// // // // myLibrary.setCurrent(winds);
// // // // myLibrary.finishCurrentBook();
// // // // myLibrary.setCurrent(ring);
// // // // myLibrary.finishCurrentBook();
// // // // console.log(myLibrary.getBooksToRead());

// // // const myLibrary = new Library ("My favorite books");

// // // const javaScript = new Book("JavaScript: The Definitive Guide", "Programming", "David Flanagan");
// // // const winds = new Book("The Four Winds", "Historical", "Kristin Hannah");
// // // const ring = new Book("The Fellowship of the Ring", "Fantasy ", "John Tolkien");

// // // const booksList = [javaScript, winds, ring];
// // // booksList.forEach((b) => myLibrary.addBook(b));

// // // myLibrary.setCurrent(javaScript);
// // // myLibrary.finishCurrentBook();
// // // console.log(myLibrary.getLastBook());
// // // myLibrary.setCurrent(winds);
// // // myLibrary.finishCurrentBook();
// // // console.log(myLibrary.getLastBook());




// // class Sal {
// //     constructor(a, b) {
// //         this._a = a;
// //         this._b = b;
// //     }

// //     get a() {
// //         return this._a;
// //     }

// //     set a(val) {
// //         this._a = val;
// //     }

// //     maxSpeed() {
// //         return 500;
// //     }

// // }

// // const obj = new Sal(23, 45);
// // obj.a = 5;
// // console.log(obj.a)

// // console.log(Sal.maxSpeed());


// function Vehicle(model, speed) {
//     this.model = model;
//     this.speed = speed;
// }

// Vehicle.prototype.drive = function () {
//     console.log(`${this.model} is driving`);
// }

// const veh = new Vehicle('Reno', 220);

// console.log(veh);
// veh.drive();

// function Car(model, speed, passengers) {
//     Vehicle.call(this, model, speed);
//     this.passengers = passengers;
//     this.music = function () {
//         console.log("listen stmh");
//     }
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.carryPassengers = function () {
//     console.log(`carry ${this.passengers} passengers`);
// }



// const mini = new Car('mini', 160, 5);


// console.log(mini);

// const veh2 = new Vehicle("bmw", 400);
// console.log(Vehicle);


// class Distance {
//     constructor(averageSpeed, travelTime) {
//         this.averageSpeed = averageSpeed;
//         this.travelTime = travelTime;
//     }
    
//     getDistance() {
//         return this.averageSpeed * this.travelTime;
//     }
// }

// class Vehicle {
//     constructor(kind, model, speed, time) {
//         this.kind = kind;
//         this.model = model;
//         this.distance = new Distance(speed, time);
//     }

//     totalDistance() {
//         if (this.distance) {
//             return this.distance.getDistance();
//         }
//     }
// }

// const truck = new Vehicle("Truck", "Chevrolet", 80, 6);
// console.log(truck.totalDistance());

function Car(model) {
    this.model = model;
    let speed = 1;

    const calcCarSpeed = function () {
        console.log(`Complex calculation of car speed. Result: ${speed} km/h`);
    }

    this.changeSpeed = function(speedValue) {
        if (speedValue > 200) {
            throw new Error("Speed cannot be more than 200 km/h");
        }
        speed = speedValue;
        calcCarSpeed();
    }
}

const car = new Car("Ford");
car.speed; // undefind;
car.calcCarSpeed();// Uncaught Type Error
car.changeSpeed(180); // Complex calculation of car speed. Result: 180 km/h
car.changeSpeed(220); // Uncaught Error: Speed cannot be more than 200 km/h