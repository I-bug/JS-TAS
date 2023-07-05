
const books = {
    title: 'Ijays Books',
    description: 'This is a story about the author',
    numberOfPages: 100,
    author: 'Ijeoma Lawretta',
    reading: true
}
console.log(books.author)













//INTRO TO ONJECTS LESSON ON JS
// const myObject = {name:'car', color:'red', price: 25000}

// const door = {
//     isOpen:false,
//     material:'wood',
//     height: 8
// }

// console.log(door.isOpen)
// console.log(door['material']) //this is another way to access the property of an object





// const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Feb', 'Oct', 'April','Nov', 'Dec']

// console.log(months.lastIndexOf('April')) // this is how to check an element exists. If it returns -1 it means it doesn't exist. And if it returns 0 or +1 it means it exists


// const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// console.log(months.indexOf('Monday')) // this is how to check an element exists. If it returns -1 it means it doesn't exist. And if it returns 0 or +1 it means it exists






// SPLICE ARRAY LESSON
// const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// months.splice(4,4)
  //Assignments below
// Remove Jan - March
// months.splice(4,2) -- what will be the returned array
//                    -- what will be the modified array


// console.log(months, months.splice(4,1, 'My custom month')) //this is to replace an index


// SLICE ARRAY LESSON
// months.slice(3,9)
// months.slice(1,7)
// April - Aug
// Aug - Dec










// SHIFT AND UNSHIFT ARRAY LESSON
// const notEmpty = ['First Index', 'Second element', 477, true]

// notEmpty.unshift('Pre-Element') // this is the unshift function

// notEmpty.shift()  //this is the shift function

// console.log(notEmpty)



// POP Array

// for(let start = 0; start <= notEmpty.length; start=start+1) {
//     notEmpty.pop()
//     notEmpty.pop()  
// }

// notEmpty.pop()  //this is the POP function


// PUSH ARRAY
// emptyArray.push()

// emptyArray.push('First Index', 'Second element', 477, true)

// notEmpty.push('Pushed element')

// console.log(notEmpty)



// const myWeekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// const numArray = [90, 60, 50]
// const emptyArray = []

// // const thirdElement =myArray[4]
// // myArray[4] = 45 //the element in the arrray was altered

// emptyArray[0]= 'first element'
// emptyArray[1] = 'second element'
// emptyArray[3] = 'fourth element'
// console.log(myWeekArray[10])




// // ARRAY TASK 11
// // const friendsArray = ['Rose', 'Chi', 'Nk', 'Noble', 'Ify']
// // const numArray = [90, 60, 50]


// // INTRO TO ARRAY LESSON
// // const myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// // const numArray = [90, 60, 50]

// // const emptyArray = []

// // console.log(emptyArray.length)




// // CALLBACK FUNCTION LESSON

// // function greetings (greet) {   //this has a higher order functiona nd a callback function
// //     greet();
// // }

// // function callback() {
// //     console.log("Good morning");
// // }

// // greetings(callback);
// //                     OR
// // greetings(function() {
// //     console.log("Good morning");
// // })

















// //  OBJECT METHODS LESSON

// // const myObject = {
// //     name: 'car',
// //     color: 'red',
// //     price: 25000
// // }

// // const door = {
// //     isOpen: false,
// //     material: 'wood',
// //     height: 8,
// //     toggleOpenAndClose: function(){
// //         if(door.isOpen===true) {
// //             door.isOpen = false
// //         } else {
// //             door.isOpen = true
// //         }
// //     }
// // }

// // door.toggleOpenAndClose()

// // console.log(door.isOpen)


// // const person = {
// //     name: 'Ijay',
// //     age: 24,
// //     siblings: ['Lawrence', 'Laura', 'Liveth'],
// //     addSibling: function(){
// //         person.siblings.push('Lawretta')
// //     }
// // }

// // person.addSibling('Lawretta')
// // person.haircolor = ('brown')   // we created another property here
// // console.log(person)













// //  FUNCTION EXPRESSION LESSON

// // function greet(name) {
// //     console.log("Good morning, " + name);
// // }

// // greet ("Nick");  //this function can also be called from the top as it is a Declared function

// // const myGreet = function greet(name) {
// //     console.log("Good morning, " + name)
// // };

// // myGreet("Nick");   // this function will not work if called before the point it was initialized hence it is called FUNCTION EXPRESSION





// // SCOPE LESSON
// // function greet() {

// // const myName = 'Ijay';
// //     console.log("Good morning, "  +  myName);

// // }
// // greet();

// // function anotherGreet() {  //this wouldn't work here because a function is called in another function
// //     console.log("Good evening, " + myName);
// // }
// // anotherGreet();











// // function calculateAreaOfRectangle(length, width) {
// //     const area = length * width;
// //     return area;
// // }
// // const moreOp = calculateAreaOfRectangle(10.5, 2.5)

// // console.log(moreOp);


    





// // console.log("Area of the Rectangle is: " + area)
// // }
// // console.log(calculateAreaOfRectangle(10.5, 2.5));







// // function converter(dollar) {
// //     // convert to naira and return the equivalent naira value
// //     // conversion rate: 410 naira to 1 dollar
// //     const naira = dollar * 410
// //     return naira;
// // }

// // const nairaValue = converter(100)

// // console.log(nairaValue)




// // RETURN FUNCTION LESSON
// // function addNumbers (firstNumber, secondNumber) {
// //     const sum = firstNumber + secondNumber;
// //     return sum;
// // }
// // const moreOp = addNumbers(7.9, 4.9) + 20;
// // console.log(moreOp);

// //console.log(addNumbers(7.9, 4.9));





// // FUNCTION LESSON
// // function addNumbers (firstNumber, secondNumber) {
// //     const sum = firstNumber + secondNumber;
// // }

// //console.log (addNumbers(7.9, 4.9));





// // function greeting(name) {
// //     console.log('Good morning,  ' +  name);
// // }

// // greeting('Laurel');




// // function MyFunction(){ //this is the functio declaration
// //     console.log('My first function!');
// // }

// // MyFunction(); // this is the fuction call











// // let number = 1
// // while (number <= 20){
// //     if(number % 2!== 0)
// //     console.log(number)
// // }



// // FOR-LOOP LESSON
// // for(let star = 1; star <=100; star = star+1) {
// //     console.log(star + ' star')
// // }



// // LESSON FOR WHILE LOOP
// //let star = 1 // starting point
// // while (star <=10000){
// //     if(star===1){
// //         console.log(star + ' star')
// //     } else{
// //         console.log(star + ' stars')
// //     }
// //         star = star + 1
// // }






// // SWITCH STATEMENT FOR TASK 7
// // const triangleTypes= ('side1, side2, side3')
// // let side1= 17
// // let side2=19
// // let side3= 12

// // switch(triangleTypes){
// //     case(side1===side2 && side2===side3):
// //         console.log('This is an Equilateral triangle')
// //         break
// //     case(side1===side2 || side2===side3 || side1===side3):
// //         console.log('This is an Isoceles triangle')
// //         break
// //     default:
// //         console.log('This is a Scalene triangle')
// // }















// // TASK 7 IS BELOW USING IF...ELSE..IF
// // const side1= 17
// // const side2= 17
// // const side3= 10

// // if(side1===side2 && side2===side3){
// //     console.log('Equilateral trainagle')
// // }else if(side1===2 || side2===side3 || side1===side3){
// //     console.log('Isoceles triangle')
// // }else {
// //     console.log('Scalene triangle')
// // }





// // SWITCH STATEMENT LESSON
// // const day = 'Thursday'
// // switch(day){
// //     case 'Friday':
// //         console.log('TGIF')
// //         break
// //     case 'Saturday':
// //         console.log('Yeh! The weekend is here')
// //         break
// //     case 'Sunday':
// //         console.log('Happy Sunday!')
// //         break
// //     default:
// //         console.log('Go to work!')

// // }





// // const age =78 

// // // this is the test for IF...ELSE..IF statements

// // if(age >= 18 && age <= 65) {

// // console.log('You are eligible to vote')
// // } else if(age>65) {
// //    console.log('You are too old to vote')
// // } else {
// // console.log('You are too young to vote')
// // }
//                     // OR
// // const day = 'Thursday'

// // if(day==='Friday') {
// //     console.log('TGIF')
// // } else if(day==='Saturday') {
// //     console.log('Yeh! The weekend is here')
// // } else if(day==='Sunday') {
// //     console.log('Happy Sunday!')
// // } else {
// //     console.log('Go to work!')
// // }







// // TASK 6 ASSIGNMENT BELOW
// // const number = 65

// // // check if the given number is divisible by 2 i.e. if the number is an even or odd number 

// // if(number % 2 === 0) {

// //     console.log('Number is even.')

// // } else {
   
// //     console.log('Number is odd.')

// // }
// // console.log(number%2===0)





// //My attempts for the IF/IF ELSE Statements task above are below;
// // console.log(number %2===0)
// // console.log(compare)
// // console.log('Number is even') + '.';
// // } else {
// //    console.log('Number is odd') + '.'
// // }








// // const age = 15 // this is the test for IF statement and ELSE statement

// // if (age >=18) {

// // console.log('You are eligible to vote')
// // } else {
// //    console.log('You are too young to vote')
// // }





// // const compare = 4==4

// /* 
// AND --> && all must be true
// OR ---> || either of them must be true
// NOT ---> ! this toggles boolean values of a perticular data
// */
 
// // const userName = 'Ijeoma'
// // const age = 30
// // const logic = age === 30 || userName === 'Ijeoma'

// // console.log(!logic)


// // const age =30
// // console.log(20>=age)







// // const addition = 50%3

// // console.log(addition)



// // TASK 5
// // const day = 'Sunday'

// // const position = 1 // this is it's current position in the week

// // const output = 'Today is ' + day+'.' + ' It is the ' + position +'st day of the week.'

// // console.log(output)









// // const isBritish = true
// // const isNight = false

// // const userDetails = null
// // console.log(typeof(userDetails))


