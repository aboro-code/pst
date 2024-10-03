// //1st

// function checkAddElements(arr,elem){
//     if(arr.includes(elem)===false){
//         arr.unshift(elem)
//         return arr
//     }
//     else{
//         return "element already exists"
//     }
// }
// console.log(checkAddElements([1,2,3,4],6))


// //2nd

// function cancArr(arr1,arr2){
//     return arr1.concat(arr2)
// }
// console.log(cancArr(["Hello","Ji","javascript"],["I","am","amazing"]))

//3rd

function sliceAndSplice(arr){
    let x=(arr.slice(2,5));
    console.log(x)
    let y=x.toSpliced(1,0,'hello')
    console.log(y)
   
}
sliceAndSplice([1,2,3,4,5,6,7])


//4th

// const originalNames=['Alice','Bob','Charlie']
// const newNames=['Arnab','Boro','Das']
// let Allnames=[...originalNames,...newNames]
// function printNamesWithGreeting(names){
//     for(let i of names){
//         console.log("Hello "+i+" !")
//     }
// }
// printNamesWithGreeting(Allnames)

//5th

// const firstNames=['John','Alice']
// const lastNames=['Doe','Smith']
// function combineNames(firstNameArr,lastNameArr){
//     let fullName=[]
//     for(let i=0;i<firstNameArr.length;i++){
//         fullName.push(firstNameArr[i]+" "+lastNameArr[i])
//     }
//     return fullName
// }
// const fullNames=combineNames(firstNames,lastNames)
// console.log(fullNames)

//6th

// const numbers=[7,2,9,1,4,6]
// function sortAscending(arr){
//     return arr.sort()
// }
// const sortedNumbers=sortAscending(numbers)
// console.log(sortedNumbers)