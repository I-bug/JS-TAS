const myObject = {
    name: 'vehicle',
    type: 'car',
    color: 'black'

}
const json = JSON.stringify(myObject) //to convert JS to JSON

console.log(JSON.parse(json)) // to convert JSON to JS Object

// console.log(json) //To view the json on console



























// TASK 15 ON OBJECTS 
// const books = [

// {
//     title: 'Ijays Books',
//     description: 'Testing is not for the weak +;' + 'Volume 1',
//     numberOfPages: 100,
//     author: 'Ijeoma Lawretta',
//     reading: true,
// },

// {
//     title: 'Ijays Books',
//     description: 'Testing is not for the weak +;' + 'Volume 2 ',
//     numberOfPages: 100,
//     author: 'Ijeoma Lawretta',
//     reading: false,
// },

// {
//     title: 'Ijays Books',
//     description: 'Testing is not for the weak +;' + 'Volume 3 ',
//     numberOfPages: 100,
//     author: 'Ijeoma Lawretta',
//     reading: true,
// },

// {
//     title: 'Ijays Books',
//     description: 'Testing is not for the weak +;' + 'Volume 4 ',
//     numberOfPages: 200,
//     author: 'Ijeoma Lawretta',
//     reading: false,
// }
// ];

// below is the loop through the books array where the reading status is true to the console




    // if (books.reading === true) {
    //     books.reading = false 
    //     } else {
    //         books.reading = true
    //     }
    // }

    









//INTRO TO OBJECTS LESSON ON JS
// const myObject = {name:'car', color:'red', price: 25000}

// const door = {
//     isOpen:false,
//     material:'wood',
//     height: 8,
//     toggleOpenAndClose: function() {
//         if(door.isOpen === true) {
//             door.isOpen = false
//         } else {
//             door.isOpen = true
//         }

//     } 
// }

// const person = {
//     name: 'Nick',
//     age: 24,
//     siblings: ['Richard', 'Ken', 'Jane'],
//     addSibling: function (name){
//         person.siblings.push(name)
//     }
// }

// person.addSibling('Henry')
// person.hairColor = 'black'
// console.log(person)
// console.log(door.isOpen)
// console.log(door['material']) //this is another way to access the property of an object





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




// //  OBJECT METHODS LESSON & INTRO TO OBJECT LESSON

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



// // const isBritish = true
// // const isNight = false

// // const userDetails = null
// // console.log(typeof(userDetails))


