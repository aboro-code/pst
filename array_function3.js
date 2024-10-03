// //1st
// let numbers=[2,5,6,7,8,9];
// let evenNumbers=numbers.filter(ele=>ele%2==0)
// console.log(evenNumbers)


//2nd
// const studentData=[
//     {name:"Alice",score:88},
//     {name:"Bob",score:92},
//     {name:"Charlie",score:75},
//     {name:"David",score:64}
// ]
// function assignGrades(students){
//     return students.map((student)=>{
//         let newStudent={...student};
//         if(newStudent.score>=90){
//             newStudent.grade="A";
//         }
//         else if(newStudent.score>=80 && newStudent.score<=89){
//             newStudent.grade="B";
//         }
//         else if(newStudent.score>=70 && newStudent.score<=79){
//             newStudent.grade="C";
//         }
//         else{
//             newStudent.grade="D";
//         }
//         return newStudent;
//     })
// }
// const gradedStudents=assignGrades(studentData);
// console.log(gradedStudents)


//3rd

// const inventory=[
//     { name: "Laptop", price: 800 },
//     { name: "Phone", price: 600 },
//     { name: "Tablet", price: 300 }
//     ]
// const totalPrice = inventory.reduce((acc,ele)=>acc+ele.price,0)
// console.log(totalPrice)

//4th
          
const ages=[25,30,90,21,19]
console.log(ages.some((ele)=>ele>=18))
console.log(ages.every((ele)=>ele>=18))