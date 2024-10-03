//1st

// function getStringKeysWithoutFilter(obj){
//     let stringKeys=[]
//     for(let i in obj){
//         if (typeof obj[i]==="string"){
//             stringKeys.push(i)
//         }
//     }
//     return stringKeys
// }
// const input={name:"john",age:25,city:"New York",occupation:"Engineer",}
// console.log(getStringKeysWithoutFilter(input))


//2nd

// function swapKeysAndValues(obj){
//     const swapped={}
//     for(let i in obj){
//         swapped[obj[i]]=i//swapped.obj.i,,swapped.1=a
//     }
//     return swapped
// }
// const input={a:1,b:2,c:3}
// console.log(swapKeysAndValues(input))



//3rd

// function createBankAccount(initialBalance){
//     let balance=initialBalance
//     let newbalance=0
//     return{
//         deposit: function(amount){
//             return `AmountDeposited: ${amount}, NewBalance: ${balance+amount}`
//         },
//         withdraw: function(amount){
//             return `AmountWithdrawed: ${amount}, NewBalance: ${balance-amount}`
//         },
//         checkBalance: function(){
//             return `CurrentBalance: ${balance}`
//         }
//     }
// }
// const account=createBankAccount(200)
// console.log(account.deposit(50))
// console.log(account.checkBalance())

//4th

// function sumToSingleDigit(num){
//     let sum=0;
//     let numStr=num.toString();
//     let strArr=numStr.split('');
//     for (let i=0;i<strArr.length;i++){
//         sum+=parseInt(strArr[i]);
//     }
//     if (sum>9){
//         return sumToSingleDigit(sum);
//     }
//     else{
//         return sum;
//     }
// }
// let input = sumToSingleDigit(123456)
// console.log(input)