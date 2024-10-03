/*function manipulateStudentInfo(student){
    let studentCopy={...student}
    delete studentCopy.grades
    var sum=0
    for(let i of student.grades){
        sum+=i
    }
    student.averageGrade=sum/student.grades.length
    return[student,studentCopy]
}
const student={
    name:"John Doe",
    age:20,
    grades:[85,90,78,92,88],
    city:"New York"
};
const[modifiedStudent,studentCopy]=manipulateStudentInfo(student)
console.log(modifiedStudent)
console.log(studentCopy)
*/


function getPizzaCount(guests){
    slicesInPizza=8
    slicesPerGuest=3
    PizzaToOrder=Math.ceil(guests*slicesPerGuest/slicesInPizza)
    return PizzaToOrder
}
const guestsInvited=36
const PizzasToBeOrdered=getPizzaCount(guestsInvited)
console.log(PizzasToBeOrdered)