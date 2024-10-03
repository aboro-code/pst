// 1st 
// for (let i=1;i<=10;i++){
//     console.log(i)
// }
// for(let j=11;j<=20;j++){
//     setTimeout(()=>{
//         console.log(j)
//     },2000)
// }

//2nd


// function checkWeather(){
//     return new Promise((res,rej)=>{
//         let weather=Math.random()>0.5?'Sunny':'Rainy';
//         //console.log(weather) to check if code was working or not
//         if(weather=='Sunny'){
//             res("Weather great for picnic!")
//         }
//         else if(weather=='Rainy'){
//             rej("It might rain today!")
//         }
//     })
// }
// checkWeather()
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

//3rd

// function makeDinner(){
//     setTimeout(()=>{
//         console.log("Boiling Water...")
//         setTimeout(()=>{
//             console.log("Adding Pasta...")
//             setTimeout(()=>{
//                 console.log("Stirring Pasta...")
//                 setTimeout(()=>{
//                     console.log("Serving Meal...")
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }

// makeDinner()

//4th 

// function fetchStockPrice(){
//     return Math.floor(Math.random()*(500-100+1))+100;
// }
// function checkPrice(price){
//  return new Promise((resolve, reject) => {
//     if(price<400){
//         resolve('Checking price again...')
//     }
//     else{
//         reject('Alert: High price detected! Stopping checks.')
//     }
//  })

// }

// function startMonitoring(){
//     let intervalId=setInterval(()=>{
//         let price=fetchStockPrice();
//         console.log(`Price: ${price}`);
//         checkPrice(price)
//         .then((message)=>{
//             console.log(message)
//         })
//         .catch((err)=>{
//             console.log(err)
//             clearInterval(intervalId)
//         })
//     },2000)
// }
// startMonitoring()

//5th

let data=fetch('https://dummyjson.com/posts');
let response=data.then(res=>res.json());    
response.then(data=>console.log(data))
.catch(()=>console.log('error fetching data'))
console.log(response)