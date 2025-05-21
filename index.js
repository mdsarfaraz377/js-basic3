console.log('Hiii  kaise ho jeee')

let name = 'Sarfaraz';  //primitive string
name// jaise hi hm primitive wale lastname ke under dot lagunga waise hi javascript internally as a string object treat karega

let lastname = new String('Sarfarz ') // string object->use of string constructor


let message = 'This is my first message';
let words = message.split(' ')
console.log(words)

let messages = 'This is \n my first \n message'
console.log(messages)

let messages1 = 'this is  \n my  \' \"first \n message'
console.log(messages1)

let message2 = `
Hello Md,

Thanks for the opportunity

Regards,
Sarfaraz`;
console.log(message2)

let date = new Date()
console.log(date)

let date2 = new Date('June 20 1998 7:15')
console.log(date2)

let date3 = new Date(1998, 5, 20, 7)
console.log(date3)

date3.setFullYear(1947)
date3.getDate
console.log(date3)

// Arrays -> collection of  differnt types of stor data, reference type, object-number, boolen
// 1.Adding new element
// 2. finding elements
// 3. Removing Elements
// 4. splitting elements
// 5. Combining elements

// creation
let numbers = [1,2,3,4,5,6]
console.log(numbers)

// access -> index

// numbers.push(9) numbers
// numbers.slice(4)
// numbers.slice(2,0,'a','b','c','d')
// to print console.log(numbers) 

// console.log(numbers)           I have learnt on primitive
// numbers.push(10)
// console.log(numbers)
// numbers.slice(4)
// console.log(numbers)
// console.log(numbers.indexOf(9))

// // we want to check if number is exist or not
// if(numbers.indexOf(4)!=-1)
//    console.log('present')

// console.log(numbers.includes(2))

// console.log(numbers.indexOf(4,2))         primitve searching-> indexOf,includes

// now have learnt refernce          
// search -> callback function
// A callback function is a function
//  passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.
let courses = [
    {no:1, name:'Sarfaraz'},
    {no:2, name:'wahid'},
    {no:3, name:'Hamid'}
]
console.log(courses)

// console.log(courses.indexOf({no:1, name:'Sarfaraz'}))

// console.log(useCallback(
//   () => {
//     first
//   },
//   [second],
// )
// )


// let course = courses.find(function(course){
//   return course.name=='Sarfaraz'
// })
// console.log(course)

// let course = course.find(courses => course.name==='Sarfaraz');

// function(course)  {
//     return course.name=='Sarfaraz'
// };
// console.log(course)

// to find course/object with name 'Sarfaraz'

// let course = course.find(function(course){
//   return course.name=='Sarfaraz'
// })

// console.log(course)

// arrow 
let course = courses.find(course => course.name==='Sarfaraz')
console.log(course)

// // removing element -> begining->shift method use karek, end -> from pop()  method, middle -> from slice method

// let digit = [1,2,3,4,5,6,7];
// // ending
// digit.pop();
// console.log(digit)

// // begining
// digit.shift()
// console.log(digit)

// // middle
// digit.splice(2,1);
// console.log(digit);

// // empty an array -> using garbage collector
// let digit = [1,2,3,4,5,6,7,8];
// let digits = digit
// // digit = []
// // //  digit.length =0
// // digits.splice(0,digit.length)
// console.log(digit)
// console.log(digits)


// Combining and slicing 
// combine -> using concat() method
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = first.concat(second)
// console.log(combined)

// // slice method -> slice(starting index, ending index
// let sliced = combined.slice(2,5)
// console.log(sliced)

// let marks = [10,20,30,40,50,60,70,80];
// // let slices = marks.slice() //copy of original array
// let slices = marks.slice(2,6);
// console.log(slices)

// // HW -> combining and slicing on object

// // spread operator
// let first = [1,2,3]
// let second = [4,5,6]
// let combined = [...first, 'a', ...second, 'b', true, false]
// console.log(combined)

// // create copy'
// let another = [...combined]
// console.log(another)

// array iterating
let arr = [10,20,30,40,50,60];

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// })

// arr.forEach(number => console.log(number))

let number =  [10,20,30,40,50]
const joined = number.join(',');

console.log(joined)
// 

// split -> it creates the array

// let sent = 'This is my first message'
// let sent1 = sent.split(' ')
// console.log(sent1)

// let joins = sent1.join('_')
// console.log(joins)

// let digit = [105,13,80,6,29];
// let digit1 = digit.sort()
// console.log(digit1)

// digit.reverse();
// console.log(digit)

// let digit = [1,2,-1,-2];
// // let filtered = digit.filter(function(value){
// //     return value >= 0;
// // })

// // arrow function
// let filtered = digit.filter(value => value>=0)
// console.log(filtered)

// // map
// let digit = [5,6,7,8,9]
// // let item = digit.map(function(value){
// //     return 'student_id' + value
// // })

// let item = digit.map(value => 'student_no'+value)
// console.log(item)

// mapping with objects
let digit = [1,2,-4, -9]

// let filtered = digit.map(value => value>=0)

// let items = filtered.map(function(num){
//     return {value:num}
// })

// using arrow method
let items = digit
                .filter(value=>value>=0)
                .map(num => {value:num});
console.log(items)