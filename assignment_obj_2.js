/*function createPerson(name,age){
    return{
        name,
        age
    }
}
function printPersondetails(person){
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
}
const person1 = createPerson("Alice",30)
printPersondetails(person1)*/

/*function createPerson(name,age){
    return{
        name,
        age
    }
}
function printPersonInfo(person){
    console.log(`My name is ${person.name} and im ${person.age} yrs old.`)
}
const person3=createPerson("sarah",35)
console.log(person3)
printPersonInfo(person3)*/

function book(title,author){
    this.title=title;
    this.author=author;
    this.intro=function(){
        return title+" by "+author
    }
}
const book1=new book(`The Catcher in the Rye`,`J.D.Salinger`)
const book2=new book(`1984`,`George Orwell`)
console.log(`Book1:`)
console.log(book1.intro())
console.log(`Book2:`)
console.log(book2.intro())