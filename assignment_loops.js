/*function isPrime(num){
    if(num<=1) {
        return false;
    }
    if(num==2) {
        return true;
    }
    for(let i=2;i<num/2;i++){
        if(num%i===0){
            return false;
        }
    return true
}
}
function display(start,end){
    let arr = []
    for(let i=start;i<=end;i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }
    return (arr)
}
console.log(display(1,30 ));*/



/*let arr=[1,2,3,4,5,6,7]
function check(num1){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]==num1){
            console.log(true)
        }
       /* else{
            console.log(false)
        }*/
 /*   }
}
check(3)*/

function rank(percentStd1,percentStd2,percentStd3){
    // let a=[percentStd1,percentStd2,percentStd3]
     //for(let i=0;i<=a.length;i++){
         if(percentStd1>percentStd2&&percentStd1>percentStd3){
             if(percentStd2>percentStd3){
                 console.log(`student 1 is 1st,student 2 is second and student 3 is third`)
             }
             else{
                 console.log(`student 1 is 1st,student 3 is second and student 2 is third`)
             }
         }
         else if(percentStd2>percentStd1&&percentStd2>percentStd3){
             if(percentStd1>percentStd3){
                 console.log(`student 2 is 1st,student 1 is second and student 3 is third`)
             }
             else{
                 console.log(`student 2 is 1st,student 3 is second and student 1 is third`)
             }
         }
         else{
             if(percentStd1>percentStd2){
                 console.log(`student 3 is 1st,student 1 is second and student 2 is third`)
             }
             else{
                 console.log(`student 3 is 1st,student 2 is second and student 1 is third`)
             }
         }
     }
 //}
 rank(90,5,7)
 rank(9,90,7)
 rank(9,7,90)