// // // // function shiftArray(array) {
// // // //     if (array.length == 0) {
// // // //         return [];
// // // //     }
// // // //     let arr = [...array];
// // // //     return [arr.pop(), ...arr];
// // // //  }

// // // //  console.log(shiftArray([77, 0, -1, 'red', true, 120]));
// // // //  console.log(shiftArray([]));

// // // // function isTwoDigit(number) {
// // // //     // your code
// // // //     if (typeof(number) != 'number') {
// // // //         return false;
// // // //     }
// // // //     if (Math.abs(number) > 9 && Math.abs(number) < 100) {
// // // //         return true
// // // //     }
// // // //     return false;
// // // // }

// // // // function filterArray(array, predicate) {
// // // //     // your code
// // // //     let arr = [...array];
// // // //     return arr.filter(predicate);
// // // // }

// // // // console.log(filterArray([0, 120, 33, -10, 450, 'green', 88], isTwoDigit));

// // // // function getWordsCount(str) {
// // // //     // your code
// // // //     return str.split(/[ ,\.\/]+/).filter(item => item.length > 0).length;
// // // // }

// // // // console.log(getWordsCount("One Two,Three.Four/Five")); //5
// // // // console.log(getWordsCount("Red,green,blue...")); //3
// // // // console.log(getWordsCount(" ")); //0
// // // // console.log(getWordsCount("., /")); //0

// // // // let aDel = [" ", ",", ".", "\/"];

// // // // function parse(str, y) {
// // // //   let rExp = new RegExp(`[${y.join('')}]`);
// // // //   return str.split(rExp);
// // // // }

// // // // console.log(parse('Раз, два!, три', aDel));
// // // // console.log(parse('Раз, д%ва!, три', aDel));
// // // // console.log(parse("One Two,Three.Four/Five", aDel));

// // // // function checkName(value) {
// // // //     // your code
// // // //     value = value.trim();
// // // //     if (value.length < 3) {
// // // //         return false;
// // // //     }
// // // //     if (value[0] === value[0].toUpperCase()) {
// // // //         return true;
// // // //     }
// // // //     return false;
// // // // }

// // // // console.log(checkName('vladyslav')); // false
// // // // console.log(checkName('Vladyslav')); // false
// // // // console.log(checkName('     Vladyslav    ')); // false
// // // // console.log(checkName('Va')); // false
// // // // console.log(checkName('vladyslav')); // false


// // // function applyDiscount(product, discount) {
// // //     // your code
// // //     if (discount < 0) discount = 0;
// // //     let price = product.price;
// // //     price = price * (1 - discount / 100);
// // //     return { ...product, price : price}
// // // }
// // // // function applyDiscount(product, discount) {
// // // //     // your code
// // // //     const newProduct = {...product};
// // // //     newProduct.prise = newProduct.price * (1 - discount / 100);
// // // //     return newProduct
// // // // }

// // // let item = { name: 'Pineapple', price: 80 };
// // // console.log(applyDiscount(item, 30)); //{ name: 'Pineapple', price: 56 }


// // function getRoles(users) {
// //     // your code
// //     let result = []
// //     for (i of users) {
// //         if (!result.includes(i.role)) result.push(i.role);
// //     }
// //     return result;
// // }

// // const users = [ { id: 2, role: 'admin' }, { id: 3, role: 'manager' }, { id: 4, role: 'manager' } ];
// // console.log(getRoles(users)); //[ 'admin', 'manager' ]

// function reduceStrings(array) {
//     return array.filter((item) => item).reduce((sum, current) => sum + current[0], '');
// }

// const colors = [ 'red', 'green', 'blue' ];
// console.log(reduceStrings(colors)); //rgb
// const array = [ 'Left', 'Mouse', 'Button', '' ];
// console.log(reduceStrings(array)); //LMB

// function getFormatted(h, m, s) {
//     // your code
//     let str_h = h > 9 ? h.toString() : "0" + h;
//     let str_m = m > 9 ? m.toString() : "0" + m;
//     let str_s = s > 9 ? s.toString() : "0" + s;
//     let res = [str_h, str_m, str_s];
//     return res.join(':');
// }

// console.log(getFormatted(20, 5, 8)); //20:05:08
// console.log(getFormatted(20, 5, 8)); //20:05:08
// console.log(getFormatted(20, 5, 8)); //20:05:08
// console.log(getFormatted(20, 5, 8)); //20:05:08

// function sequence(start){
//     //code
//     let index = start;
//     function next() {
//         index++;
//     }
//     function current() {
//         return index;
//     }
//     return {next : next, current : current};
// }

// const seq = sequence(0);
// console.log(seq.current());// 0
// seq.next();
// console.log(seq.current());// 1
// seq.next();
// console.log(seq.current()); // 2

// function calculateAverageGrade(grades){
//     if (grades.length === 0) return null;
//     grades.map((item) => {
//         if (item < 0 || item > 10) {
//             throw new Error("Invalid grade");
//         }
//     });

//     return grades.reduce((sum, item) => sum + item)/grades.length;
// }
// console.log(calculateAverageGrade([])); // 7


// async function getPrice(name) {
//     // Add your code here
// }

// async function getProducts(params) {
//     return params;
// }

// async function getProductInfo(id){
//     return 
// }

// getPrice("Headphones")
//   .then((d) => {
//     console.log(d);
//     return getPrice("Nonexistent name");
//   })
//   .then((d) => {
//     console.log(d);
//   });
// const end = Date.now() + 1000;
// while (Date.now() < end) {
//     const muchCompute = 1 + 2 + 3;
// }

// const obj = [{name: "headphones", id: "1", price: 1233}, {name: "asdfasdfs", id: "1", price: 1233}] ;
// let elem = obj.filter((item) => item['name'] == "headphones")[0]
// if (elem) {
//     console.log("work")
// }
// console.log(elem.price)

// const colors = [ 'yellow', 'blue', 'black', 'red', 'green', 'cyan' ]

// let res = colors.splice(colors.length/2);
// try {
//     console.log(res);
// }

// const outer = (x) => {
//     const inner = (y) => {
//         return x + y;
//     }
//     return inner;
// }

// const closef = outer(10)
// const res = closef(5)
// console.log(res)

// const data = [];

// Array.isArray()

// if (Array.isArray(data)) {
//     console.log("good")
// }

// const fs = require("fs");
// // setTimeout(() => {console.log("setTimeout out")}, 2000);

// fs.readFile(`text.txt`, 'utf8', (err, data) => {
//     setTimeout(() => {console.log("setTimeout inner")}, 1);
//     setImmediate(() => {console.log("setImmediate")})
//     console.log(data);
// })

class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }

    static age = 10;

    get getAge() {
        console.log("console " + this.age);
        return this.age;
    }
}

const student = new Student("Kostya", 4);

console.log(student.getAge);
