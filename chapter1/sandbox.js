// const speak = function(name){
//     console.log('good day ${}');
// };

// speak();




// *********object literal

// let objectVariable = {
//     Name : 'sumit',
//     age :30,
//     profession : 'software developer',
//     email : 'sumeetmadh@gmail.com',
//     comment: ['hard working guy','too smart'] 
// }

// console.log(objectVariable);

// // console.log(objectVariable.email);
// const randomKey='email';
// console.log(objectVariable[randomKey])
// objectVariable.email='sumitmad24th@gmail.com'
// console.log(objectVariable['email'])

// console.log(typeof objectVariable)  



//************ Adding methods using object literals 

// let objectVariable = {
//     Name : 'sumit',
//     age :30,
//     profession : 'software developer',
//     email : 'sumeetmadh@gmail.com',
//     comment: ['hard working guy','too smart'], 
//     login: function(){
//         console.log(`login is invoked`);
//     },
//     logout: function(){
//         console.log('logout is invoked')
//     }
// };


// objectVariable.login();
// objectVariable.logout();



//************ Adding this keyword in object literals 

// let objectVariable = {
//     Name : 'sumit',
//     age :30,
//     profession : 'software developer',
//     email : 'sumeetmadh@gmail.com',
//     comment: ['hard working guy','too smart'], 
//     login: function(){
//         console.log(`login is invoked`);
//     },
//     logout: function(){
//         console.log('logout is invoked')
//     },
//     logComment: function(){
//         this.comment
//     },
// };


// objectVariable.login();
// objectVariable.logout();
// console.log(this);



//***************Array */

// // 1.Filter method

// const scores  = [10, 30, 15, 20, 40, 30];

// const FilterScores = scores.filter((scores) =>{
//     return scores > 20;
// });

// console.log (FilterScores);

// const user = [
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'xi', premium: true},
//     {name: 'nathon', premium: false},
    
// ];

// const premiumUsers = user.filter(user=>{
//     return user.premium;
// });


// 2. Map method 

// const prices  = [10, 30, 15, 20, 40, 30];
// const salesPrices = prices.map((prices) => {
//     return prices /2
// })

// console.log(salesPrices);


// 3. reduce method

// const prices  = [10, 30, 15, 20, 40, 30];
// const salesPrices = prices.reduce((acc, curr) => {
//     if (curr > 50){
//         acc++;
//     }
// return acc;
// })

// console.log(salesPrices);

// 4. Find method

// const scores = [10, 5, 0 , 40, 60, 10, 20, 70]

// const firstHighScores = scores.find((scores) => {
// return scores > 50;
// });

// console.log(scores);

// *********** Callback function

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000);

// console.log(3);
// console.log(4);

// const getTodos = (resource, callback) =>{
//     const request = new XMLHttpRequest();
//     //listner 
//     request.addEventListener('readystatechange', () =>{
//         //console.log(request, request.readyState);
//         if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             //console.log(requestdata);
//             callback(undefined, data);
//         }
//         else if(request.readyState === 4){
//             //console.log("could not fetch data");
//             callback('could not fetch data', undefined);
//         }    
//     });
//     //request intializaing and sending
//     request.open('GET',resource);
//     request.send();    
// }



// getTodos('todos.json',(err, data)=>{
//     console.log('callback fired');
//         console.log(data);
// });

// getTodos('mario.json',(err, data)=>{
//     console.log('callback fired');
//         console.log(data);
// });

// getTodos('pattrik.json',(err, data)=>{
//     console.log('callback fired');
//         console.log(data);
// });




//****** promise example */


// const getTodos = (resource, callback) =>{

//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();
//         //listner 
//         request.addEventListener('readystatechange', () =>{
//             //console.log(request, request.readyState);
//             if (request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 //console.log(requestdata);
//                 resolve(data);
//             }
//             else if(request.readyState === 4){
//                 //console.log("could not fetch data");
//                 reject('could not fetch data');
//             }    
//         });
//         //request intializaing and sending
//         request.open('GET',resource);
//         request.send();   
//     }); 
// };
// getTodos('todos.json').then(data =>{
//     console.log ('promise 1 is resolved', data);
//     return getTodos('mario.json');
// }).then(data =>{
//     console.log('promise 2 resolved',data);
//     return getTodos('pattrikk.json');
// }).then(data =>{
//     console.log('promise 3 resolved',data);
// }).catch((err => {
//     console.log ('promise is rejected:', err);
// }));



// const getSomething = () => {

//     return new Promise((resolve, reject) =>{
//         // resolve ('some data');
//         // reject ('some error');
//     });
   
// }

// getSomething().then((data)=>{
// console.log(data);
// },(err) =>{
//     console.log(err);
// });

// getSomething().then(data => {
// console.log(data);
// }).catch(err => {
// console.log(err);
// })


// asynch and await
// console. log(1);
// console. log(2);

// const getTodos = async() => {

//     const response = await fetch ('todos.json');
//     const data = await response.json();
//     return data;

// };

// getTodos()
// .then(data => console.log('resolved:', data));

// console. log(3);
// console. log(4);

// let age = 3.14;
// let year = 'sumeetmadh@gmail.com';
// let testVariable = undefined;
// console.log(age, year, testVariable);





// for (let i =0; i<5; i++){
//     console.log('in loop:'+ i);
// }
// console.log("loop is completed");

// const names = ['shaun','tait','jackson'];
// let i = 0;
// while(i< names.length){
// console.log(names[i]);
// i++;
// }


// const names = ['shaun','tait','jackson'];
// let i = 0;
// while(i< names.length){
// console.log(names[i]);
// i++;
// }

// let i =0;
// while ( i<5){
//     console.log('in loop:'+ i);
//     i++;
// }

// console.log("loop is completed");




// Normal object creation:

const userOne ={
    username: 'chun li',
    email: 'chun.li@gmail.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log ('the user logged out');
    }
};

// console.log(userOne.email, userOne.username);
// userOne.login();


//class creation

class User {
    constructor(username, email){
        this.username= username;
        this.email=email;
    }
}

const userOne = new User ('mario', 'mario@sgmail.com');
const userTwo = new User ('luigi', 'luigi@gmail.com');

console.log (userOne);

// let i =4;
// do{
//     console.log('in loop:'+ i);
//     i++;
// } while ( i<5)

// console.log("loop is completed");

// let age = 25;
// console.log(age !== 25);


//function declaration

// function greet(){
//     console.log('kyu beeta');
// }

// greet();


// function expression

// const speak =function(name = 'sumit', title = 'miya'){
//     console.log(`kaise ho ${name} ${title}`);
// };

// speak('amit');



// const calArea = function(radius){
// return 3.14 * radius**2;
// };

// const area =calArea(5);
// console.log(area);


//arrow function

// const calArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const area = calArea(5);
// console.log(area);


// const calArea = (diaognal) => {
// return 2*diaognal;
// };

// const totalArea = calArea(5);
// console.log (diaognal);    



// const formula = (radius) => {
// return 3.14 * radius ** 2;
// };

// const circleArea = formula(3);
// console.log('total rea of the circle:' + circleArea);

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});