// IF....ELSE...IF
const side1= 17
const side2= 17
const side3= 10

if(side1===side2 && side2===side3){
    console.log('Equilateral trainagle')
}else if(side1===2 || side2===side3 || side1===side3){
    console.log('Isoceles triangle')
}else {
    console.log('Scalene triangle')
}
